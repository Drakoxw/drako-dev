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

  ngForm:any;
  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    if (form.valid) {
      const email = form.value;

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mayangbb',
        { Nombre: email.nombre, replyto: email.email, Asunto:email.asunto, Mensaje: email.mensaje },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            this.toastr.success('Gracias por su atención...', 'Mensaje Enviado!');
            form.reset()
          }
        );
    }
  }
}
