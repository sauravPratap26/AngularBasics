import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { WishModule } from './wish/wish.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishModule
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', // Correct property name to styleUrls
})
export class AppComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
      
  }
 }
