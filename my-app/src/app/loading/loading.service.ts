import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingState: boolean = false;

  constructor() { }

  public getState(): boolean {
    return this.loadingState;
  }

  public setState(state: boolean): void {
    this.loadingState = state;
  }
}
