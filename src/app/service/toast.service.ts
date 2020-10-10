import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(header: string, message: string) {
    this.messageService.add({severity: 'success', summary: header, detail: message});
  }
}
