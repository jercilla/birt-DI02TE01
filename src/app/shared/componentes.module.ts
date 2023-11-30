import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTabComponent } from './componentes/header-tab/header-tab.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderTabComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderTabComponent],
})
export class ComponentesModule {}
