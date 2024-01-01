import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyListPageRoutingModule } from './my-list-routing.module';

import { MyListPage } from './my-list.page';
import {SharedModule} from "../../shared/shared.module";
import {IonicStorageModule} from "@ionic/storage-angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyListPageRoutingModule,
    SharedModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [MyListPage]
})
export class MyListPageModule {}
