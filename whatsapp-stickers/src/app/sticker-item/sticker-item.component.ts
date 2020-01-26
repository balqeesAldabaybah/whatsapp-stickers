import { Component, OnInit, Input } from '@angular/core';
import { Sticker } from '../home/sticker.model';
import { ExportStickerPackService } from '../services/export-sticker-pack.service';


@Component({
  selector: 'app-sticker-item',
  templateUrl: './sticker-item.component.html',
  styleUrls: ['./sticker-item.component.scss'],
})
export class StickerItemComponent implements OnInit {
  @Input() public stickerItem: Sticker;
  addClicked = false;
  public appList: any [];
  constructor(private exportService: ExportStickerPackService) { }

  ngOnInit() {}

  counter(i: number) {
    return new Array(i);
  }

  AddPack(event) {
    this.addClicked = true;
    this.appList =  this.exportService.exportPackToWhatsapp(this.stickerItem);
 }
}
