import {OnInit} from '@angular/core';

export class Promis implements OnInit {

  constructor() {
    console.log('otwieram klase dla promisów');
    this.startPromis();
  }

  ngOnInit() {
  }

  startPromis() {
    // dane do przeliczenia
    const values: number[] = [1, 2, 3, 4, 5, 6, 7, 9, 0, 100, 200, 300];
    // czas odpalić obietnicę!
    this.recalc(values).then((success) => { // jak zostanie zrealizowana
      console.log(success);
    }).catch((error) => { // jak zostanie złamana
      console.log(error);
    }).finally(() => { // jak zostanie zakończona (nie zależnie czy złamana, czy nie!)
      console.log('End of promise my old jedi friend');
    });
  }

  recalc(values: number[]): Promise<string> {
    return new Promise<string>(
      (resolve, reject) => {
        let sum = 0;
        let isDivideByZero: boolean = false;
        for (const value of values) {
          if (value === 0) {
            console.log('is equal zero');
            isDivideByZero = true;
            break;
          }
          console.log('10 devided by ' + value + ' is equal: ' + (10 / value));
          sum += 10 / value;
        }
        if (isDivideByZero) {
          reject('ERROR: I made a promise and I faild I just can\'t divide by zero my old jedi friend');
        } else {
          resolve('Sum is ready my old jedi friend: ' + sum);
        }
      });
  }
}
