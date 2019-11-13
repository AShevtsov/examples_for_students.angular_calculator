import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SumModel} from '../models/sum-model';
import {SumResult} from '../models/sum-result';
import {CacluatorApiService} from '../services/cacluator-api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  sumModel: SumModel = {
    a: 0,
    b: 0
  };

  sumResult: SumResult = {
    result: 0,
    message: 'Please fill the field and click sum!'
  };

  constructor(private calculatorApi: CacluatorApiService) {
  }

  ngOnInit() {
  }

  sum(): void {
    this.calculatorApi.getSumResult(this.sumModel.a, this.sumModel.b).subscribe(
      res => {
        this.sumResult = res;
      },
      err => {
        alert('Error occured while sum the numbers!');
      }
    );
  }

}
