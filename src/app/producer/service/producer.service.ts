import {Injectable} from '@angular/core';
import {ProducerConsumerConstants} from '../../producer-consumer-constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private httpClient: HttpClient) {
  }

  postTopic(topic: string, message: string): Observable<any> {
    const postToTopicUrl = ProducerConsumerConstants.PRODUCER_BASE_URL + topic + '/push-message';
    return this.httpClient.post(postToTopicUrl, message);
  }

}
