import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StopService } from './stopService';
import { Stop } from './stop';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {

  constructor (private stopService: StopService) {}

  myControl = new FormControl();
  filteredOptions: any;
  stops: Stop[];

  ngOnInit() {
    this.loadStops();
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(name => this.filter(name));
  }

  loadStops() {
    this.stopService.getStops().subscribe(
      stops => {
        this.stops = stops.paradas.destacada;
      },
      error => {
        console.log("Request error");
      });
  }

  filter(name: string) {
    let stopsList = this.stops;
    if(name) {
      stopsList = this.stops.filter(stop => new RegExp(name, 'gi').test(stop.nombre));
    }
    return stopsList;
  }

}
