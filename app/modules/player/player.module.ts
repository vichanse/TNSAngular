// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// Angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PROVIDERS } from './services';
import { COMPONENTS } from '~/modules/player/components';

// app

@NgModule({
  declarations: [...COMPONENTS],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [...COMPONENTS],
  providers: [...PROVIDERS]
})
export class PlayerModule {}
