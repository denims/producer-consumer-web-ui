import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProducerConsumerConstants} from '../../producer-consumer-constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  consumerName = 'web-consumer';
  topicSubscribed = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) {
  }

  subscribeToATopic(topic: string): Observable<any> {
    const subscribeToTopic = ProducerConsumerConstants.TOPIC_BASE_URL + topic + '/subscribe';
    return this.httpClient.post(subscribeToTopic, this.consumerName);
  }

  pollTopic(topic: string): Observable<any> {
    const pollFromTopicUrl = ProducerConsumerConstants.CONSUMER_BASE_URL + this.consumerName + '/fetch';
    return this.httpClient.get(pollFromTopicUrl, {
      params: {topicName: topic}
    });
  }
}
