import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts = [
  {

  	title: 'Post1',
  	content: 'Dein digerentibus conpage agmina dein subsidiales totum digerentibus ita vicinitate castrensi castrensi agmina ostendit aptatae omnium sollicite distortaque textrinum naturae.',
  	loveIts: 2,
  	created_at: new Date('December 04, 2018 11:00:00')
  },
  {
  	title: 'Post2',
  	content: 'Dein digerentibus conpage agmina dein subsidiales totum digerentibus ita vicinitate castrensi castrensi agmina ostendit aptatae omnium sollicite distortaque textrinum naturae.',
  	loveIts: -1,
  	created_at: new Date('December 04, 2018 11:10:00')
  },
  {
  	title: 'Post3',
  	content: 'Dein digerentibus conpage agmina dein subsidiales totum digerentibus ita vicinitate castrensi castrensi agmina ostendit aptatae omnium sollicite distortaque textrinum naturae.',
  	loveIts: 0,
  	created_at: new Date('December 04, 2018 11:17:03')
  }
  ];
}
