import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatToolbarModule],
  exports: [MatToolbarModule, MatButtonModule, MatCardModule]
})
export class MaterialModule {}
