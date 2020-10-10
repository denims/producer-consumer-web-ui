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

  editTopic(topicName: string, topicNewName: string): Observable<any> {
    const topicEditUrl = ProducerConsumerConstants.TOPIC_BASE_URL + topicName + '/edit';
    return this.httpClient.put(topicEditUrl, topicNewName);
  }

  deleteTopic(topicName: string): Observable<any> {
    const topicEditUrl = ProducerConsumerConstants.TOPIC_BASE_URL + topicName + '/delete';
    return this.httpClient.delete(topicEditUrl);
  }


}
