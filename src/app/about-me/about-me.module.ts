import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import { FamilyInfoComponent } from '../family-info/family-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutMePageRoutingModule
  ],
  declarations: [AboutMePage, FamilyInfoComponent]
})
export class AboutMePageModule {}
