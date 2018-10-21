import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public _MessageService: MessageService) { }
  // message function
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal("Your message has been sent to us", "Thanks for giving question  :)", 'success');
    });
  }

}
