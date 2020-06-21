import {OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

export class ObservableExample implements OnInit, OnDestroy {

  // observer: Subscription; // obiekt typu Subscription będący subskrybentem tworzonego obiektu obserwatora
  // observable: Observable<any>; // nasz ukochany obserwator

  constructor() {
    // this.observable = new Observable((observer) => {
    //   setInterval(() => {
    //     observer.next(Math.random());
    //   }, 500);
    // });
    //
    // this.observer = this.observable.subscribe(
    //   (value) => {
    //     console.log(value);
    //   },
    //   (error) => {
    //     // errors here
    //   },
    //   () => {
    //     // complete
    //   }
    // );

    // const observer2 = this.observable2.subscribe( // w tym momencie uzyskiwany jest obiekt subskrybenta, który posiada metodę unsubscribe
    //   (value) => {
    //     console.log(value);
    //   },
    //   (error) => {
    //     // errors here
    //   },
    //   () => {
    //     // complete
    //   }
    // );


  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.observer.unsubscribe();
  }


  // let observable2 = new Observable((observer) => {
  //   observer.next('Some data to receive'); // and here we go, the next function that return some data to subscriber!
  //   observer.complete(); // and here is some kind of complete method call
  // });


// this.observer2.unsubscribe(); // tutaj subskrybent się odsubskrybowuje (chociaż w tym przypadku nie jest to potrzebne)


}
