import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { BannerComponent } from './components/banner/banner.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BannerComponent,
    SummaryComponent,
    TestimonialComponent,
    SkillsComponent,
    WorkExperienceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
