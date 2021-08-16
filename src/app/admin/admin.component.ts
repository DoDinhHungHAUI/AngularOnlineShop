import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
              './../../assets/libs/fontawesome-free/css/all.min.css' ,
              './../../assets/Admin/css/adminlte.min.css',

            ],

})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
