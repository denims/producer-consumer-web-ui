import { Component, OnInit } from '@angular/core';
import {TopicServiceService} from '../service/topic-service.service';
import {ToastService} from '../../service/toast.service';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.css']
})
export class DeleteTopicComponent implements OnInit {
  topicName: string;

  constructor(private topicService: TopicServiceService,
              private toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.topicService
      .deleteTopic(this.topicName)
      .subscribe(() => {
          this.toastService.showSuccess('Topic Deleted ', '');
        },
        error => this.toastService.showError(error.error.message, error.error.status));
  }
}
