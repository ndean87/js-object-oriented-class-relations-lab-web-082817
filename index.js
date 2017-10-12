store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
    return store.passengers.filter(passenger => {
      return (passenger.driverId = this.id);
    });
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return (trip.passengerId = this.id);
    });
  }

  drivers() {
    return store.drivers.filter(driver => {
      return (driver.passengerId = this.id);
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    this.id = ++tripId;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => {
      return this.driverId === driver.id;
    });
  }

  passenger() {
    return store.passengers.find(passenger => {
      return this.passengerId === passenger.id;
    });
  }
}

let natalie = new Driver('natalie');
let sly = new Driver('sly');
let erin = new Passenger('erin');
let zac = new Passenger('zac');
let maine = new Trip(natalie, erin);
let zoo = new Trip(sly, zac);
