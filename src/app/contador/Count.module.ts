import { NgModule } from '@angular/core';
import { ContadorComponent } from './count/contador.component';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
  imports: [],
})
export class CountModule {}
