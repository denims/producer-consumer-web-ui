import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProducerConsumerConstants} from '../../producer-consumer-constants';
import {Observable} from 'rxjs';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  constructor(private httpClient: HttpClient) {
  }

  createTopic(topicName: string): Observable<any> {
    return this.httpClient.post(ProducerConsumerConstants.TOPIC_CREATE_URL, topicName);
  }


}
