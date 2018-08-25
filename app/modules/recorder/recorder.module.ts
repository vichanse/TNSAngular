// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// Angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { PROVIDERS } from './services';

@NgModule({
  declarations: [],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [],
  providers: [...PROVIDERS]
})
export class RecorderModule {}
