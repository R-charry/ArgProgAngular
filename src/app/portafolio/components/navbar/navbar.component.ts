
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/authServices/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .logo-black{
    filter: invert(1);
  }
  
    .button{
    color: #0d6efd;
  }`
  ]
})
export class NavbarComponent implements OnInit {

  roles: string[] = [];
  isLogin: boolean = false;


  constructor(
              private tokenService: TokenService) { }
              
  ngOnInit(): void {
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol =>{
      if ( rol === 'ROLE_ADMIN' || rol === 'ROLE_USER'){
        this.isLogin = true; 
      }});
    }
    
    logOut(){
      this.tokenService.logOut();
      location.reload();
    }

  goToGithub() {
    window.open('https://github.com/R-charry', '_blank');
  }

  goToLinkedIn() {
    window.open('https://www.linkedin.com/in/ramiro-charry-b1b209221/', '_blank');
  }

  goToInstagram() {
    window.open('https://instagram.com/ramiro.charry', '_blank');
  }
}
