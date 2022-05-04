import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '401784e61emsh7fedae058e3ac48p1ec189jsn6b2dd6f4733f'
      },
      setParams: {
        key: 'fc502234bb5e43789b81102e85dd6467'
      }
    });
    return next.handle(req);
  }
}
