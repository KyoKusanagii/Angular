import { Directive ,ElementRef} from '@angular/core';

//屬於屬性類 directive ( Attribute directives )
//改變元素 ( Element )、元件 ( Component) 或另一個 directive 的外觀或行為
@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element:ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText="changeTexte Directive改變了文字內容!!";
  }

}
