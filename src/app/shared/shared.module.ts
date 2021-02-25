import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





const exportedClasses = [
];


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: exportedClasses,
  exports: exportedClasses
})
export class SharedModule {}
