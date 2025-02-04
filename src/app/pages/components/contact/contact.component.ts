import { Component, NgModule } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-contact',
  imports: [StarComponent, FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName:string = ''
  userEmail:string = ''
  userAge:string = ''  
  userPassword:string = ''
}
