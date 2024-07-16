import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import events from '../shared/services/EventService';
@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wishText!:String;
  @Input() wishId!:String;
  @Input() wishComplete!:boolean;
  @Output() wishCompleteChange= new EventEmitter<boolean>();

  toggleItem() {
    this.wishComplete = !this.wishComplete;
    this.wishCompleteChange.emit(this.wishComplete)
  }

  get getCss(){
    return this.wishComplete?'strikeThrough':''
  }

  removeWish(){
    events.emit('removeWish',this.wishId);
  }
}
