import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element:ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="changeTexte Directive改變了文字內容!!";
  }

}
