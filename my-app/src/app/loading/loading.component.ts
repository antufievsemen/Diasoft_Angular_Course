import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(private loadingService: LoadingService) { }

  public isLoading(): Observable<boolean> {
    return this.loadingService.getState();
  }
}
