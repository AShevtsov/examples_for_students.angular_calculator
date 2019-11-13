import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SumResult} from '../models/sum-result';

@Injectable({
  providedIn: 'root'
})
export class CacluatorApiService {
  private API_URL = environment.baseApiUrl + '/calculator/sum';
  private ADDITIONAL_STUB_PARAMETERS = environment.additionalStubParameters;

  constructor(private http: HttpClient) {
  }

  getSumResult(a: number, b: number): Observable<SumResult> {
    return this.http.get<SumResult>(this.API_URL + '?a=' + a + '&b=' + b + this.ADDITIONAL_STUB_PARAMETERS);
  }
}
