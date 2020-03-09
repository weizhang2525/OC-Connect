import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private nativeStorage: NativeStorage, private _md5: Md5) {}
  company: string;
  date;
  startTime;
  endTime;
  address: string;
  description: string;
  eventName: string;
  picture;

  submit() {
    let uniqueId = Md5.hashStr(this.eventName);
    this.nativeStorage.setItem(this.eventName, {id: uniqueId, company: this.company, date: this.date, startTime: this.startTime, address: this.address, description: this.description})
    this.nativeStorage.getItem(this.eventName).then(data => console.log(data));
    // console.log(uniqueId);
    // console.log(this.company);
    // console.log(this.date);
    // console.log(this.startTime);
    // console.log(this.endTime);
    // console.log(this.address);
    // console.log(this.description);
  }
}
