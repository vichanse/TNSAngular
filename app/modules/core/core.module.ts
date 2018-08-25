// Nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// Angular
import { NgModule } from '@angular/core';

// App
import { PROVIDERS } from './services';

@NgModule({
  declarations: [],
  imports: [NativeScriptModule],
  exports: [NativeScriptModule],
  providers: [...PROVIDERS]
})
export class CoreModule {}
