import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  nombre:string = ''
  email:string = ''
  asunto:string = ''
  mensaje:string = ''
  telefono:string = ''

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if (!form.valid) {
      this.toastr.warning('Los campos no cumplen los requisitos necesarios!','¡ATENCION!')
      setTimeout(() => {
        this.toastr.info('El email no debe tener espacios!')
      }, 2000);
    }

    if (form.valid) {
      const email = form.value;

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mayangbb',
        { Nombre: email.nombre, replyto: email.email,Telefono: email.telefono, Asunto:email.asunto, Mensaje: email.mensaje },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            this.toastr.success('Gracias por su tiempo...', 'Mensaje Enviado!',{
              timeOut: 3000,
            });
            form.reset()
          }
        );
    }
  }
}
