import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-preview',
  standalone: false,
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  myInterval = 1500;
  activeSlideIndex = 0;
  slides: { image: string; text?: string }[] = [
    { image: 'assets/template-1.webp' },
    { image: 'assets/template-2.jpg' }
  ];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
