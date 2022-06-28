let battery = new Battery();
battery.setEnergy(80);
let flashLamp = new Flashlamp();
flashLamp.setBattery(battery);
document.write("Battery info : " + battery.getEnergy()+"<br>");
flashLamp.turnOn();
flashLamp.checkLight();
battery.decreaseEnergy();
document.write("Battery info : " + battery.getEnergy()+"<br>");
flashLamp.turnOff();
flashLamp.checkLight();
