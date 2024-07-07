import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rightpopup',
  templateUrl: './rightpopup.component.html',
  styleUrl: './rightpopup.component.css'
})
export class RightpopupComponent{
  @Output() sortChanged = new EventEmitter<string>();
  isVisible = false;

  openPopup() {
    this.isVisible = true;
  }

  popupclose() {
    this.isVisible = false;
  }

  selectedButton: string = 'AtoZ'; 

  selectButton(button: string) {
    this.selectedButton = button;
  }

  sortapply(){
    this.sortChanged.emit(this.selectedButton);
  }
}
