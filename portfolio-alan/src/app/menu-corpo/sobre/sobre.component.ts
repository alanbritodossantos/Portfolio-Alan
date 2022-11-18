import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  imageSobreMim = '../../assets/image-icones/investigation.png';
  invertido_imageSobreMim = '../../assets/image-icones/invertido-investigation.png';

  constructor() { }

  ngOnInit(): void {
  }

}
