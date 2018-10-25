import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
	apiKey='bae19ed9c64b4811a8a35732182510';
	url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.apixu.com/v1/current.json?key=' + this.apiKey + '&q='; // remove after q
  }

  getWeather(city){
  	return this.http.get(this.url + city)
  		.map(res => res);
  }
}
