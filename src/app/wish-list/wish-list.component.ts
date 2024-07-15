import { Component, EventEmitter, Input } from '@angular/core';
import { WishItem } from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = []; // Mark wishes as an input property

  toggleItem(item: WishItem) {
    console.log(WishItem);
    item.isCompleted = !item.isCompleted;
    // item.wishText=`${item.wishText} saurav`
    console.log(item);
  }
}
