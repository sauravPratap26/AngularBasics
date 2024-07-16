import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItems';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import {EventService} from './shared/services/EventService';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ], // Add CommonModule to imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', // Correct property name to styleUrls
})
export class AppComponent {
  items: WishItem[] = [new WishItem('angular'), new WishItem('react', true)];
  title = 'wishlist';

  filterLogic: any = (item: WishItem) => item;

  
  updateFilter(newFilter: (item: WishItem) => boolean) {
    this.filterLogic = newFilter;
  }

  constructor(events:EventService){
    events.listen('removeWish',(id:any)=>{
      console.log(id)
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    })
  }
  // get visibleWishItem(): WishItem[] {
  //   return this.items.filter(this.filter);
  // }
  //instead of using visibleWishItem, I am directly applying the logic in the app.component.html file

}
