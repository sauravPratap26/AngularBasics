import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItems';

const filtersSelection=[
  (item: WishItem)=>item,
  (item: WishItem)=>!item.isCompleted,
  (item: WishItem)=>item.isCompleted,
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})

export class WishFilterComponent {
  //using the two way binding:
  @Input() filter:any;
  @Output() filterChange= new EventEmitter<any>();

  changeFilter(value:any){
    this.filterChange.emit(filtersSelection[value]);
  }
  ListFilter=0
}
