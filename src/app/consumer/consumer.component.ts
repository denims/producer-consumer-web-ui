import {Component, OnInit} from '@angular/core';
import {ConsumerService} from './service/consumer.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  subscribedTopic: string;

  message: [] = [];

  constructor(private  consumerService: ConsumerService) {
  }

  ngOnInit(): void {
    this.consumerService.topicSubscribed.subscribe(
      topic => this.subscribedTopic = topic
    );
    this.pollTopics();
  }

  pollTopics() {
    setInterval(() => {
      if (this.subscribedTopic != null) {
        this.consumerService.pollTopic(this.subscribedTopic)
          .subscribe(messages => {
              (messages as []).forEach(value => this.message.push(value)
              );
            }
          );
      }
    }, 5000);
  }

  clearMessages() {
    this.message = [];
  }
}


