import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ScannerComponent } from './features/scanner/scanner.component';

const routes: Routes = [
  { path: "", component: ScannerComponent, pathMatch: "full" },
  { path: "pay", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
