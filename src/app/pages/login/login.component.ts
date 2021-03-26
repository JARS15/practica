import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel=new UsuarioModel();
  recordar=false;

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.usuario.email=localStorage.getItem('email');
      this.recordar=true;
    }
  }

  login(form: NgForm){

    if(form.invalid){return;}


    // Es un mensaje flotante de verificacion
    Swal.fire({
      allowOutsideClick: false,
      icon:'info',
      text:'Espere por favor'
    });
    Swal.showLoading();

    // Es parta el apartado de recordar usuario
    if(this.recordar){
      localStorage.setItem('email',this.usuario.email);
    }
    
    console.log(this.usuario);
    console.log(form);
    Swal.close();
    this.router.navigateByUrl('/home')
  
  // Mensaje de error por si mete usuario o contraseña mal
  // Swal.fire({
  //   icon:'error',
  //   text:'Error al autentificar'
  //   text: aqui mandas los parametros del error
  // });


  }

}
