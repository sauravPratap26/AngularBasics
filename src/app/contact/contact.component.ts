import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  contactForm= new FormGroup({

    senderName : new FormControl('Saurav'),
    senderEmail : new FormControl(''),
    senderMessage : new FormControl('')
  })
  submitForm() {
    console.log(this.contactForm.value)
    // if (this.senderNameControl.dirty) {
    //   alert(`you changed ${this.senderNameControl.value} name field`);
    // }
  }
}
