import {Component, OnInit} from '@angular/core';
import {TopicServiceService} from '../service/topic-service.service';
import {MessageService} from 'primeng/api';
import {ToastService} from '../../service/toast.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  topicName: string;

  constructor(private topicService: TopicServiceService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.topicService
      .createTopic(this.topicName)
      .subscribe(topic => {
        console.log(topic);
        this.toastService.showSuccess('Topic Added :', topic.topicName);
      });
  }

}
