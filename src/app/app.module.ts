import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopicComponent} from './topic/topic.component';
import {ProducerComponent} from './producer/producer.component';
import {ConsumerComponent} from './consumer/consumer.component';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import {AddTopicComponent} from './topic/add-topic/add-topic.component';
import {FormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {MessageService} from 'primeng/api';
import {EditTopicComponent} from './topic/edit-topic/edit-topic.component';
import {DeleteTopicComponent} from './topic/delete-topic/delete-topic.component';
import {SubscribeComponent} from './consumer/subscribe/subscribe.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    ProducerComponent,
    ConsumerComponent,
    AddTopicComponent,
    EditTopicComponent,
    DeleteTopicComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastModule,
    RippleModule,
    TableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
