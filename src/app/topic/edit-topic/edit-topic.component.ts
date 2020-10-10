import {Component, OnInit} from '@angular/core';
import {TopicServiceService} from '../service/topic-service.service';
import {ToastService} from '../../service/toast.service';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent implements OnInit {
  topicOldName: string;
  topicNewName: string;

  constructor(private topicService: TopicServiceService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.topicService
      .editTopic(this.topicOldName, this.topicNewName)
      .subscribe(topic => {
          this.toastService.showSuccess('Topic Edited :', topic.topicName);
        },
        error => this.toastService.showError(error.error.message, error.error.status));
  }
}

