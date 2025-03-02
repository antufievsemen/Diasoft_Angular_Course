import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/domain/author';

@Injectable()
export class AuthorsService {
  private readonly apiUrl: string = '/authors'

  constructor(private http: HttpClient,
  ) { }

  public getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}`);
  }
}
