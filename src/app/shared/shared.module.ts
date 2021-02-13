import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';



import { ScrollToDirective } from './directives/scroll-to.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





const exportedClasses = [
  AuthLayoutComponent,
  ScrollToDirective,
  LandingLayoutComponent,
];


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: exportedClasses,
  exports: exportedClasses
})
export class SharedModule {}
