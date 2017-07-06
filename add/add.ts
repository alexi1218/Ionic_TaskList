import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  
  tValue:any;
  taskList = [];

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {
  }

  addTask(){

    this.nativeStorage.getItem('taskLt')
    .then(
      data => {
        //var arr = JSON.parse(data);
        this.taskList.push( this.tValue);
        this.nativeStorage.setItem('taskLt', JSON.stringify(this.taskList))
        .then(
            () => console.log("Saved entry"),
            error => console.log(error)
        )
      },    
      error => {
        //console.log("Saving first entry");
        this.taskList.length = 0;
        this.taskList.push( this.tValue );
        this.nativeStorage.setItem('taskLt', JSON.stringify(this.tValue))
        .then(
            () => console.log("Saved entry"),
            error => console.log(error)
        )
      })
  }

 }