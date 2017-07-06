import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { AlertController } from 'ionic-angular';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  tasks = [];
  isDisabled: boolean = false;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, 
            public alertCtl: AlertController) {
  }

  // on page load/reloaded
  ionViewDidEnter() {

    this.nativeStorage.getItem('taskLt')
    .then(
      data => {
        var arr = JSON.parse(data);
        this.tasks.length = 0;

        if( data.length == arr.length + 2){
          this.tasks.push(arr);
        }
        else{
          for(var i in arr){
              //console.log(arr[i]);
              this.tasks.push(arr[i]);
          }
        }


        this.isDisabled = false;
      },    
      error => {
        console.log("Tasks list empty");
        this.isDisabled = true;

      })    
  }

  taskSelected(item: any){
    this.navCtrl.push(ViewPage, {
      p1: item
    })
  }

  clear(){
    alert();

    this.nativeStorage.remove('taskLt')
    this.tasks.length = 0;
    this.isDisabled = true;
  }

  alert(){
    let confirm = this.alertCtl.create({
      title: 'Delete all tasks?',
      message: 'You sure you want to remove all from the list?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present();    
  }
}
