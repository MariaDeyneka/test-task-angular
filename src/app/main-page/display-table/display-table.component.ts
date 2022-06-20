import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

export interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss'],
})
export class DisplayTableComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Name',
    'Username',
    'Email',
    'Company',
    'Website',
    'Address',
    'see-more',
  ];
  public ELEMENT_DATA: any = [];
  ngOnInit(): void {}

  dataSource: PeriodicElement[] = this.ELEMENT_DATA;
  selectedValue = '';
  element = 1;
  public userData: any = this.ELEMENT_DATA;
  constructor(private readonly httpService: HttpService) {
    this.httpService.getUsers().subscribe((el) => {
      console.log(el);

      this.ELEMENT_DATA = el;
    });
  }

  public filter(el: any) {
    console.log(el);

    this.dataSource.sort((a: any, b: any) => {
      console.log(a[el].localeCompare(b[el]));

      return a[el].localeCompare(b[el]);
    });
    console.log('after');
  }
  public data(el: any) {
    console.log(el);
    this.element = el.id - 1;
  }
}
