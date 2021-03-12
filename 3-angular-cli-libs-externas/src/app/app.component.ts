import { Component } from '@angular/core';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq } from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rating: string | undefined;
  movieExist: boolean;
  movieNotExist: boolean;

  movies = [
    { name: 'Batman Begins', rating: 8.2 },
    { name: 'Insomnia', rating: 7.1 },
    { name: 'Doodlebug', rating: 7.1 },
    { name: 'Test', rating: 2 }
  ];

  names = ['Angular', 'Ionic', 'React', 'Vue', 'Fluter'];

  moviesByRating: any;
  removeName: any;
  sortedNums = [11, 13, 21, 3, 3, 15, 18, 8, 13];


  constructor() {
    const findValue = find(this.movies, (movie) => movie.rating = 7.1);
    console.log(findValue);
    this.movieExist = !!find(this.movies, { name: 'Batman Begins' });
    this.movieNotExist = !!find(this.movies, { name: 'ABABAB' });

    console.log(times(3, String));
    console.log(times(4, constant('edupala')));
    debounce(this.callMethods, 5000)();
    set(this.names, '4', 'Bootstrap');
    console.log(this.names);
    console.log('Get movie name', get(this.movies, 'name', 'Doodlebug'));
    console.log(keyBy(this.movies, 'rating'));



    const reducedMovie = reduce(this.movies, (result: any, movie) => {
      if (movie.rating >= 7 && movie.rating <= 9.1) {
        (result[movie.rating] || (result[movie.rating] = [])).push(movie);
      }

      return result;
    }, {});

    console.log('Reduce : ', reducedMovie);
    const copy = cloneDeep(this.movies);
    console.log('This copy method of lodash : ' + copy);
    console.log('Sort and remove duplicate', sortedUniq(this.sortedNums));
  }

  findMoviesByRating(rating: any): void {
    this.moviesByRating = filter(this.movies, (movie) => movie.rating > rating);
  }

  removeItem(item: string): void {
    this.names = pull(this.names, item);
    console.log(this.names);
  }

  callMethods(): void {
    alert('Call after 5 second');
  }
}
