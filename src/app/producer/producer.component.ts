import {Component, OnInit} from '@angular/core';
import {ProducerService} from './service/producer.service';
import {ToastService} from '../service/toast.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  topic: string;
  message: string;

  constructor(private producerService: ProducerService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.producerService
      .postTopic(this.topic, this.message)
      .subscribe(message => {
          this.toastService.showSuccess('Added Message To Topic :', message.topic.topicName);
        },
        error => this.toastService.showError(error.error.message, error.error.status));
  }
}
