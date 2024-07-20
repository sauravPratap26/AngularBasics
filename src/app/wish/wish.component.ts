import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItems';
import { EventService } from '../shared/services/EventService';
import { WishService } from '../wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent {
  items: WishItem[] = [];
  title = 'wishlist';

  filterLogic: any = (item: WishItem) => item;

  updateFilter(newFilter: (item: WishItem) => boolean) {
    this.filterLogic = newFilter;
  }

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (id: any) => {
      const index = this.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  // get visibleWishItem(): WishItem[] {
  //   return this.items.filter(this.filter);
  // }
  //instead of using visibleWishItem, I am directly applying the logic in the app.component.html file
}
