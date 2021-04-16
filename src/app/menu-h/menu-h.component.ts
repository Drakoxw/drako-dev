import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-h',
  templateUrl: './menu-h.component.html',
  styleUrls: ['./menu-h.component.css']
})
export class MenuHComponent implements OnInit {
  toogle2: string = 'close';
  toogle1: string = 'open';

  constructor() {
  }

  ngOnInit(): void {

  }

  isCh(){
    if (this.toogle1 === 'open') {
      this.toogle1 = 'close'
      this.toogle2 = 'open'
    } else if (this.toogle1 === 'close')
    {
      this.toogle1 = 'open'
      this.toogle2 = 'close'
    }
  }


}
