import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  ngForm:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    if (form.valid) {
      const email = form.value;

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mayangbb',
        { name: email.nombre, replyto: email.email, asunto:email.asunto, message: email.mensaje },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            form.reset()
          }
        );
    }
  }
}
