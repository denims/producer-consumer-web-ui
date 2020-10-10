import {Component, OnInit} from '@angular/core';
import {ConsumerService} from '../service/consumer.service';
import {MessageService} from 'primeng/api';
import {ToastService} from '../../service/toast.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  topicName: string;
  subscribedTopic: string;

  constructor(private consumerService: ConsumerService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.consumerService.subscribeToATopic(this.topicName)
      .subscribe(subscription => {
          this.toastService
            .showSuccess('Subscribed to topic :', subscription.topic.topicName);
          this.subscribedTopic = subscription.topic.topicName;
          this.consumerService.topicSubscribed.emit(this.subscribedTopic);
        },
        error => this.toastService.showError(error.error.message, error.error.status));
  }
}
