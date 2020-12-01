import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { EventsComponent } from './components/events/events.component';
import { SongsComponent } from './components/events/songs/songs.component';
import { NewSongComponent } from './components/events/songs/new-song/new-song.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { JoinFormComponent } from './components/join-form/join-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EventsComponent,
    SongsComponent,
    NewSongComponent,
    CreateFormComponent,
    JoinFormComponent,
    NavBarComponent,
    SideBarComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
