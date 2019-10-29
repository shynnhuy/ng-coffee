import { NgModule } from '@angular/core';
import {
  MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatSidenavModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule
} from '@angular/material';
// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatButtonModule } from "@angular/material/button";
// import { MatSelectModule } from "@angular/material/select";
// import { MatIconModule } from "@angular/material/icon";
// import { MatDialogModule } from "@angular/material/dialog";
// import { MatCardModule } from "@angular/material/card";
// import {MatInputModule} from "@angular/material/input";

const Material = [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [ Material ],
  exports: [ Material ]
})
export class MaterialModule { }
