import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { ReactiveFormsModule } from '@angular/forms';
import {FooterComponent} from "../../shared/footer/footer.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
