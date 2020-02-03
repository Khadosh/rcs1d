class Vacuum {
    constructor(brand, model, height, power) {
        this.brand = brand;
        this.model = model;
        this.height = height;
        this.power = power;
    }
    turnOn = () => {
        this.turnedOn = true;
    }
    turnOff = () => {
        this.turnedOff = false;
    }
    turboMode = () => {
        this.turboModeOn = true;
    }
}
let vacuumCleaner = new Vacuum('Liliana', 'El truchon', '1 metro', '5 millones de watts');

const estado = (vacuumCleaner) => {
    if (vacuumCleaner.turboModeOn == true) {
        console.log('Turbo mode is turned on')
    } else if (vacuumCleaner.turnedOn == true) {
        console.log('Vacuum clener is in normal mode')
    } else {
        console.log('Vacuum cleaner is off')
    }
}