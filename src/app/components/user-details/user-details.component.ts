import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  
    username: string;
    userDetails: any;
    repoDetails: any;

    constructor(private active:ActivatedRoute, private githubService:ApiService, private route: Router )
    {

    }

    ngOnInit(): void 
    {
      this.active.params.subscribe(params => {this.username=params['id']; 
      console.log("params=",this.username);
       })

       this.githubService.getUser(this.username).subscribe({
        complete: ()=> {
          console.log("successfully done!");
          
            
        },
        
        
        
        error:()=> {
          // we navigate back to the search page
          alert("you have entered a wrong username");
          this.route.navigate(['search']);
        },
        
        
        next:(data : any= [])=> {
            this.userDetails=data;
            console.log(this.userDetails);

            this.githubService.getRepos(this.username).subscribe({
              complete:()=>{
                console.log("repo details fetched successfully")
              },


              next:(data2 : any= [])=> {
                this.repoDetails=data2;
                console.log(this.repoDetails);
            }
            })
           
        }
       })
    }
}
