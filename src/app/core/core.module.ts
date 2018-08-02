import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AuthGuard } from './guards/auth/auth.guard';

const modules = [
  RouterModule
];

const components = [
  NavigationBarComponent
];

const exported = [
  ...components
];

const providers = [
  AuthGuard
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
