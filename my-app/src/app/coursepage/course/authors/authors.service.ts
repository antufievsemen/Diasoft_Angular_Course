import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/domain/author';
import { LoadingService } from 'src/app/loading/loading.service';

@Injectable()
export class AuthorsService {
  private readonly apiUrl: string = '/authors'

  constructor(private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  public getAll(): Observable<Author[]> {
    this.loadingService.setState(true);
    const res =  this.http.get<Author[]>(`${this.apiUrl}`);
    this.loadingService.setState(false);
    return res;
  }
}
