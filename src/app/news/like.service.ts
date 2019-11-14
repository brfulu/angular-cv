import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor() { }

  toggleLike(id: string): void {
    let value = JSON.parse(window.localStorage.getItem(id));
    window.localStorage.setItem(id, JSON.stringify(!value));
  }

  doLike(id: string): boolean {
    return JSON.parse(window.localStorage.getItem(id));
  }
}
