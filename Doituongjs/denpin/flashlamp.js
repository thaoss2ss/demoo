class Flashlamp {
  status;
  battery;
  constructor(status, battery){
    this.status = status;
    this.battery = battery;
  }
  setBattery(battery){
    this.battery = battery;
    return this.battery;
  }
  getBatteryInfo(){
    return this.battery;
  }
  turnOn(){
    this.status = true;
    return this.status;
  }
  turnOff(){
    this.status = false;
    return this.status;
  }
  checkLight(){
    if(this.status === true){
      document.write("Đang bật<br>")
    }
    else {
      document.write("Không bật<br>")
    }
  }
}
