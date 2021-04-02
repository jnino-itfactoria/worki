import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { TrendingpostsComponent } from './trendingposts/trendingposts.component';
import { FeedComponent } from './feed/feed.component';
import { GruposComponent } from './grupos/grupos.component';
import { ChatComponent } from './chat/chat.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    ProfileComponent, 
    PostsComponent, 
    TrendingpostsComponent, 
    FeedComponent, 
    GruposComponent, 
    ChatComponent, 
    DirectorioComponent, 
    NotificacionesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    ProfileComponent,
    PostsComponent,
    TrendingpostsComponent,
    FeedComponent, 
    GruposComponent, 
    ChatComponent, 
    DirectorioComponent, 
    NotificacionesComponent
    
  ]
  
})
export class ComponentsModule { }
