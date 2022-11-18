import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-rodape',
  templateUrl: './menu-rodape.component.html',
  styleUrls: ['./menu-rodape.component.scss']
})
export class MenuRodapeComponent implements OnInit {

  imageSrcLinkdln = '../../assets/image-icones/icon-linkedin.png';
  imageSrcGithub = '../../assets/image-icones/icon-github.png';

  constructor() { }

  ngOnInit(): void {
  }

}
