import { nanoid } from "nanoid";

export class WishItem {
  id: string;
  wishText: string;
  isCompleted: boolean;

  constructor(text: string, isCompleted: boolean = false) {
    this.id = nanoid();
    this.wishText = text;
    this.isCompleted = isCompleted;
  }
}
