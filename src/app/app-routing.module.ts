import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CompetenceComponent } from './competence/competence.component';
import { PortefolioComponent } from './portefolio/portefolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path: "acceuil", component : AcceuilComponent},
  {path: "presentation", component :PresentationComponent },
  {path: "competences", component :CompetenceComponent },
  {path: "portefolio", component :PortefolioComponent },  
  {path: "resume", component :ResumeComponent },
  {path: "contact", component :ContactComponent },
  {path: "", redirectTo: "acceuil", pathMatch: "full" }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
