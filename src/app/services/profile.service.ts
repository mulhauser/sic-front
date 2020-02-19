import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { defaultIfEmpty, filter } from "rxjs/operators";
import { Profile } from "../interfaces/profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  // private property to store all backend URLs
  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(
      k =>
        (this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
  }

  public getProfile(): Observable<Profile> {
    return this._http.get<Profile>(this._backendURL.getProfile).pipe(
      filter(_ => !!_),
      defaultIfEmpty()
    );
  }
}
