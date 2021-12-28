class Transport {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model;
    }
        startEngine() {
            console.log("Engine is disable")
        }

}


class Car extends Transport {
    constructor(type, name, model, color,  motorPower) {
        super(type, name, model, color,  motorPower);


        this.color = color;
        this.motorPower = motorPower
    }
        startEngine() {
        console.log("Engine is start")
    }
}


const TOYOTA = new Car ("CAR", "SUPRA", "GTR", "gradient", "1100hp")
console.log(TOYOTA)
