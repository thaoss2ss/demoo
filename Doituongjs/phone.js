class Mobile {
  battery;
  draft;
  inbox;
  sent;

  constructor(battery, draft, inbox, sent) {
    this.battery = battery;
    this.draft = draft;
    this.inbox = inbox;
    this.sent = sent;
  }

  chargeBattery() {
    if (this.battery < 100) {
      this.battery++;
    }
  }
}
