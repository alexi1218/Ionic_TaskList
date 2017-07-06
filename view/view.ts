import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { ListPage } from '../list/list';
/**
 * Generated class for the ViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  param: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nStorage: NativeStorage) {
    this.param = navParams.get('p1');
  }

  ionViewDidLoad() {
    console.log('From task: ' + this.param);
  }

  removeTask(){

    this.nStorage.getItem('taskLt')
    .then(
      data => {
        var arr = JSON.parse(data);
        
        var list = [];
        for(var i in arr){
          list.push(arr[i]);
        }

        //console.log(list);
        //now delete entry
        var index = list.indexOf(this.param);
          list.splice(index,1);

        this.nStorage.setItem('taskLt', JSON.stringify(list))
        .then(
          () => console.log("Modified list"),
          error => console.log(error)
        );

      },
      error => console.log(error)
    );

    this.navCtrl.pop();
  }
}
