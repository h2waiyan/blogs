import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  // []


  userid = this.activatedRoute.snapshot.params['userid']; // 1 , 2

  aUser: any;

  ngOnInit(): void {
    const myuser = this.dataService.userData.filter((el) => el.id == this.userid);
    this.aUser = myuser[0];
    console.log(this.aUser);
  }

}
