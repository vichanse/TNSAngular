// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// Angular
import { NgModule } from '@angular/core';

// App
import { PROVIDERS } from './services';
import { PIPES } from '~/modules/core/pipes';

@NgModule({
  declarations: [...PIPES],
  imports: [NativeScriptModule],
  exports: [NativeScriptModule, ...PIPES],
  providers: [...PROVIDERS]
})
export class CoreModule {}
