import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItems';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; 
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent], // Add CommonModule to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' // Correct property name to styleUrls
})
export class AppComponent {
  items : WishItem[]= [
    new WishItem("angular"),
    new WishItem("react", true)
  ];
  title = 'wishlist';

  get visibleWishItem(): WishItem[]{
    let value=this.ListFilter
    if(value== 0){
      return this.items
    }
    else if(value == 1){
      return  this.items.filter(item=>!item.isCompleted)
    }
    else{
      return  this.items.filter(item=>item.isCompleted)
    }
  }


  ListFilter=0



}
