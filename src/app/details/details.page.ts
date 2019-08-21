import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private router:NavController,public toastController: ToastController) { }

  ngOnInit() {
    this.presentToast()
  }

  slides=[
    {
      imageUrl: '/assets/slide2.png',
      title: 'First ',
  
    },
    {
      imageUrl: '/assets/slide2.png',
      title: 'Second',
   
    },
  ]

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'This bidding is going to end in  "10 M".',
      color:"dark",
      duration: 10000
    });
    toast.present();
  }

  GoBack(){
    this.router.navigateBack('/home')
  }

}
