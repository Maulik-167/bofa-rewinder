import { Component } from '@angular/core';
import { TemplateService } from '../template.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public templateService: TemplateService, private router: Router) {

  }


  redirectToHome() {
    this.router.navigateByUrl('/');
    this.templateService.selectedPage = 'client-Search';
  }

}
