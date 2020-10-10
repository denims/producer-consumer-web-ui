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

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    ProducerComponent,
    ConsumerComponent,
    AddTopicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastModule,
    RippleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
