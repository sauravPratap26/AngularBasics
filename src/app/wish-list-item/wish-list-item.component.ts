import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wishText!:String;
  @Input() wishComplete!:boolean;
  @Output() wishCompleteChange= new EventEmitter<boolean>();
  toggleItem() {
    this.wishComplete = !this.wishComplete;
    this.wishCompleteChange.emit(this.wishComplete)
    // item.wishText=`${item.wishText} saurav`
    // console.log(item);
  }
}
