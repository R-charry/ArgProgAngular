import { Component } from '@angular/core';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [`
  .banner-home{
    min-height: 10vh;
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IFyLs08VBkrpNxjXTWCN1mbSvNWMtSc7w_J1LZYfccdvZvRIdj-fcr3IexELBFzTKqE&usqp=CAU");
    display: grid;
    place-items: center;
    color: white;
    text-shadow: 1px 1px 1px black;
  }
  `]
})
export class BannerComponent{
  
}
