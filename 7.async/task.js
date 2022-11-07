class AlarmClock {
  constructor(alarmCollection = [], timerId = null) {
    this.timerId = timerId;
    this.alarmCollection = alarmCollection;
  }

  addClock(alarmTime, callback, timerId) {
    if (timerId === undefined) {
      throw new Error("Невозможно идентифицировать будильник. Параметр id не передан");
    } else if (this.alarmCollection.some(alarmItem => alarmItem.id === timerId)) {
      console.error("Будильник с таким id уже существует");
      return
    } else {
      this.alarmCollection.push({
        time: alarmTime,
        callback: callback,
        id: timerId,
    });
    }
  }

  removeClock(timerId) {
    let succesfullDelete = this.alarmCollection.some(alarmItem => alarmItem.id === timerId);
    this.alarmCollection = this.alarmCollection.filter(alarmItem => alarmItem.id !== timerId);
    return succesfullDelete;
  }
  
  getCurrentFormattedTime() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    return `${hour}:${minutes}`;
  }

  checkClock() {
    this.alarmCollection.forEach(alarmItem => {
      if (alarmItem.time === this.getCurrentFormattedTime()) {
        return alarmItem.callback();
      }
    })
  }

  start() {
    if (this.timerId) {
      return;
    }

    this.timerId = setInterval(() => this.checkClock(), 1000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }

  printAlarms(){
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach((alarmItem, alarmIndex) => {console.log(`Будильник №${alarmIndex + 1} заведён на ${alarmItem.time}`)});
  }
}

const phoneAlarm = new AlarmClock();
function testCase() {
    phoneAlarm.addClock("22:39", () => console.log("Давай вставай уже!"), 2);
    phoneAlarm.addClock("22:39", () => console.log("Иди умываться!"), 3);
    phoneAlarm.printAlarms()
    phoneAlarm.removeClock(2);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
    console.log(phoneAlarm);
  }