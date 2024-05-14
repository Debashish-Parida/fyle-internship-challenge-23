import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit
{

  searchForm: FormGroup ;
  username: any;

  constructor(private route :Router)
  {

  }

  ngOnInit(): void {
    this.searchForm=new FormGroup({
      username :new FormControl(
        null,
        [Validators.required]
      )
    })
  }

  sendUser(){
    //console.log(this.searchForm.value);
    this.username=this.searchForm.value.username;
    this.route.navigate([`user/${this.username}`]);
  }

}
