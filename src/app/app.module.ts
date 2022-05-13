import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostService } from './services/posts.service';
import { PostFormRouteComponent } from './post-form-route/post-form-route.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    NavbarComponent,
    PostFormRouteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
