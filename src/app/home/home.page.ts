import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eixoX: number;
  eixoY: number;
  eixoZ: number;

  constructor(
    private deviceMotion: DeviceMotion

  ) {}

//para ligar o acelerometro
ligarAcelerometro(){
  this.deviceMotion.getCurrentAcceleration()
  .then(
    (acceleration: DeviceMotionAccelerationData) => 
    console.log(acceleration),
    (error: any) => console.log(error)
  );

  // Watch device acceleration
  var subscription = this.deviceMotion
  .watchAcceleration()
  .subscribe((acceleration: DeviceMotionAccelerationData) => {
  console.log(acceleration, acceleration.x, acceleration.y, acceleration.z);
  this.eixoX = acceleration.x;
  this.eixoY = acceleration.y;
  this.eixoZ = acceleration.z;

});
}
  
}
