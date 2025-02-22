import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      const token = localStorage.getItem('token');
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', token ? token : '')
      const reqWithToken = new HttpRequest(req.method, req.url, req.body, {headers})
      return next.handle(reqWithToken);
    }

    return next.handle(req);
  }
}
