import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  auth:any;
  constructor(private authService:AuthService) {
    this.auth = authService;
  }    

  ngOnInit(): void {
  }

  changeStatus(){
    this.authService.changeAuth();
  }

}
