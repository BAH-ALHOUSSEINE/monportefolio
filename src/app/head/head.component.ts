import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

  closeMenu() {
    // Trouver l'élément avec la classe collapse et lui enlever la classe show pour fermer le menu
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

}
