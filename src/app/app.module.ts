import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ChartModule } from 'primeng/chart';
import { StudiesComponent } from './components/studies/studies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { EducationComponent } from './components/education/education.component';
import { LanguageComponent } from './components/language/language.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    HomeComponent,
    StudiesComponent,
    SkillsComponent,
    ExperiencesComponent,
    TechnologiesComponent,
    EducationComponent,
    LanguageComponent,
    ProfessionalSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ChartModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
