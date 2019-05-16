import { Component } from '@angular/core';

@Component({
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {

  columnsToDisplay = ['title', 'category', 'progress'];

  exercises = [
    {
      id: 1,
      title: 'Dead or Alive (Bon Jovi)',
      category: 'Song/Track',
      dateCreated: '2019/2/16',
      progress: 33,
      deadline: '2020/12/12'
    },
    {
      id: 2,
      title: 'Smoke on the Water (Deep Purple)',
      category: 'Song/Track',
      dateCreated: '2019/2/14',
      progress: 28,
      deadline: '2020/12/12'
    },
    {
      id: 3,
      title: 'Paranoid (Black Sabbath)',
      category: 'Song/Track',
      dateCreated: '2019/2/1',
      progress: 78,
      deadline: '2020/12/12'
    },
    {
      id: 4,
      title: 'I Got Mine (Black Keys)',
      category: 'Song/Track',
      dateCreated: '2019/2/8',
      progress: 94,
      deadline: '2020/12/12'
    },
    {
      id: 5,
      title: 'American Pie (Don McLean)',
      category: 'Song/Track',
      dateCreated: '2018/3/12',
      progress: 36,
      deadline: '2020/12/12'
    },
    {
      id: 6,
      title: 'Aces High (Iron Maiden)',
      category: 'Song/Track',
      dateCreated: '2018/3/5',
      progress: 0,
      deadline: '2020/12/12'
    },
    {
      id: 1,
      title: 'Dead or Alive (Bon Jovi)',
      category: 'Song/Track',
      dateCreated: '2019/2/16',
      progress: 33,
      deadline: '2020/12/12'
    },
    {
      id: 2,
      title: 'Smoke on the Water (Deep Purple)',
      category: 'Song/Track',
      dateCreated: '2019/2/14',
      progress: 28,
      deadline: '2020/12/12'
    },
    {
      id: 3,
      title: 'Wild Side (Motley Crue)',
      category: 'Song/Track',
      dateCreated: '2019/2/1',
      progress: 78,
      deadline: '2020/12/12'
    },
    {
      id: 4,
      title: 'Lonely Boy (Black Keys)',
      category: 'Song/Track',
      dateCreated: '2019/2/8',
      progress: 94,
      deadline: '2020/12/12'
    },
    {
      id: 5,
      title: 'Beat It (Michael Jackson)',
      category: 'Song/Track',
      dateCreated: '2018/3/12',
      progress: 36,
      deadline: '2020/12/12'
    },
    {
      id: 6,
      title: 'Run to the Hills (Iron Maiden)',
      category: 'Song/Track',
      dateCreated: '2018/3/5',
      progress: 0,
      deadline: '2020/12/12'
    },
    {
      id: 1,
      title: 'Aint it Fun Solo (Guns n Roses)',
      category: 'Song/Track',
      dateCreated: '2019/2/16',
      progress: 33,
      deadline: '2020/12/12'
    },
    {
      id: 2,
      title: 'Enter Sandman (Metallica)',
      category: 'Song/Track',
      dateCreated: '2019/2/14',
      progress: 28,
      deadline: '2020/12/12'
    },
    {
      id: 3,
      title: 'Countdown to Extinction (Megadeth)',
      category: 'Song/Track',
      dateCreated: '2019/2/1',
      progress: 78,
      deadline: '2020/12/12'
    },
    {
      id: 4,
      title: 'I Got Mine (Black Keys)',
      category: 'Song/Track',
      dateCreated: '2019/2/8',
      progress: 94,
      deadline: '2020/12/12'
    },
    {
      id: 5,
      title: 'Iron Man (Black Sabbath)',
      category: 'Song/Track',
      dateCreated: '2018/3/12',
      progress: 36,
      deadline: '2020/12/12'
    },
    {
      id: 6,
      title: '2 Minutes to Midnight (Iron Maiden)',
      category: 'Song/Track',
      dateCreated: '2018/3/5',
      progress: 0,
      deadline: '2020/12/12'
    }

];

  constructor() { }
}
