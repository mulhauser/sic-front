import { NgModule, ViewChild, Directive } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CarnetComponent } from "./carnet/carnet.component";
import { VaccinComponent } from "./vaccin/vaccin.component";
import { DonsComponent } from "./dons/dons.component";
import { ProfilComponent } from "./profil/profil.component";
import { MatSidenav } from "@angular/material/sidenav";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "carnet", component: CarnetComponent },
  { path: "vaccin", component: VaccinComponent },
  { path: "dons", component: DonsComponent },
  { path: "profil", component: ProfilComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
