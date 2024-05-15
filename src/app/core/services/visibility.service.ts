import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  private _navVisible: BehaviorSubject<boolean> = 
  new BehaviorSubject<boolean>(false);

  navVisible$ = this._navVisible.asObservable();

  constructor() { }

  //togle nav cambia de valor cada que se llama a este metodo
  
  toggleNav() {
    this._navVisible.next(!this._navVisible.value);
  }


}
