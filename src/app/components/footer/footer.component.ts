import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  constructor(private router: Router) {}
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
