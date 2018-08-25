// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// Angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PROVIDERS } from './services';

// app

@NgModule({
  declarations: [],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [],
  providers: [...PROVIDERS]
})
export class PlayerModule {}
