
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  // esta es una instancia del Usuario
  usuario:UsuarioModel=new UsuarioModel() ;
  recordar=false;

  
  constructor(private router:Router   ) { }

  ngOnInit() {  
    this.usuario=new UsuarioModel();
  }


  onSubmit(form:NgForm){


    
    if (form.invalid) { return; }

    // Es un mensaje flotante de verificacion
    Swal.fire({
      allowOutsideClick: false,
      icon:'info',
      text:'Espere por favor'
    });
    Swal.showLoading();

// Mensaje cuando el formulario fue enviado
     console.log('formulario Enviado');
    //  Recibe el usuaro
     console.log(this.usuario);
     console.log(form);
    
 // El mensaje se  cierra cuando se verifico y esta correcto
    Swal.close();
    
    
  // Es parta el apartado de recordar usuario
    if(this.recordar){
      localStorage.setItem('email',this.usuario.email);
    }
    this.router.navigateByUrl('/administrador')
  


    
  // Mensaje de error por si mete usuario o contraseña mal
  // Swal.fire({
  //   icon:'error',
  //   text:'Error al autentificar'
  //   text: aqui mandas los parametros del error
  // });
    

    
  }


}
