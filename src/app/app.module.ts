import { ProfileService } from './services/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {RoutingModule} from './routing/routing.module';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LastnamePipe } from './lastname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LastnamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
