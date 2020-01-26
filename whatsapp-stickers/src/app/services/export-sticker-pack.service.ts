import { Injectable } from '@angular/core';
import { Sticker } from '../home/sticker.model';
import { Platform } from '@ionic/angular';

declare var window: any;
@Injectable({
  providedIn: 'root'
})
export class ExportStickerPackService {
  appList: any[];
  constructor(private platform: Platform) { }

  exportPackToWhatsapp(stickerItem: Sticker) {
    // check if whatsapp is installed
    this.getAppList();
  //  console.log(this.appList);
    return [true, false];
  }

 private  getAppList() {
     this.platform.ready().then((d) => {
       window.plugins.packagemanager.show(true, (s) => {
        alert(JSON.stringify(s) );
        this.appList = s;
       }, (e) => {
         alert('Error');
       });
     });
  }
}
