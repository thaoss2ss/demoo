class myDate {

  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getDate() {
    return this.day + '/' + this.month + '/' + this.year;
  }

  setDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}
let date = new myDate(28,5,1995);
let date1 = new myDate(21,6,2022);
document.write(date.getDate());
document.write('<br>');
date1.setDate(28,5,4000);
document.write(date1.getDate());




