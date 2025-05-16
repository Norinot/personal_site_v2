import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ServicesComponent } from "./components/services/services.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { EducationComponent } from "./components/education/education.component";
import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, NavigationComponent, SkillsComponent, ServicesComponent, ProjectsComponent, EducationComponent, HobbiesComponent, ContactFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'site';
}
