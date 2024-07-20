import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
senderNameControl= new FormControl('Saurav');
senderEmailControl= new FormControl('');
senderMessageControl= new FormControl('');
submitForm(){
  if(this.senderNameControl.dirty){
    alert(`you changed ${this.senderNameControl.value} name field`)
  }
}
}
