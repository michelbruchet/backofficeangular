import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userName : string='';
  constructor() { 
    this.userName= localStorage.getItem("user-name") || '{}';
  }

  ngOnInit(): void {
  }

}
