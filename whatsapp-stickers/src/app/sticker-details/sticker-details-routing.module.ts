import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StickerDetailsPage } from './sticker-details.page';

const routes: Routes = [
  {
    path: '',
    component: StickerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StickerDetailsPageRoutingModule {}
