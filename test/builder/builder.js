var Builder;
(function (Builder) {
    class Shop {
        Construct(vehicleBuilder) {
            this._vehicleBuilder = vehicleBuilder;
            this._vehicleBuilder.BuildFrame();
            this._vehicleBuilder.BuildEngine();
            this._vehicleBuilder.BuildWheels();
            this._vehicleBuilder.BuildDoors();
        }
        ShowVehicle() {
            this._vehicleBuilder.vehicle.display();
        }
    }
    class VehicleBuilder {
        constructor(vehicleType) {
            this.vehicleType = vehicleType;
            this._vehicle = null;
            this._vehicle = new Vehicle(vehicleType);
        }
        get vehicle() {
            return this._vehicle;
        }
        BuildFrame() {
            throw new Error("Not implemented.");
        }
        BuildEngine() {
            throw new Error("Not implemented.");
        }
        BuildWheels() {
            throw new Error("Not implemented.");
        }
        BuildDoors() {
            throw new Error("Not implemented.");
        }
    }
    class CarBuilder extends VehicleBuilder {
        constructor() {
            super(VehicleType.Car);
        }
        BuildFrame() {
            this.vehicle.parts[PartType.Frame] = "Car Frame";
        }
        BuildEngine() {
            this.vehicle.parts[PartType.Engine] = "2500 cc";
        }
        BuildWheels() {
            this.vehicle.parts[PartType.Wheel] = "4";
        }
        BuildDoors() {
            this.vehicle.parts[PartType.Door] = "4";
        }
    }
    class MotorCycleBuilder extends VehicleBuilder {
        constructor() {
            super(VehicleType.MotorCycle);
        }
        BuildFrame() {
            this.vehicle.parts[PartType.Frame] = "MotorCycle Frame";
        }
        BuildEngine() {
            this.vehicle.parts[PartType.Engine] = "500 cc";
        }
        BuildWheels() {
            this.vehicle.parts[PartType.Wheel] = "2";
        }
        BuildDoors() {
            this.vehicle.parts[PartType.Door] = "0";
        }
    }
    class ScooterBuilder extends VehicleBuilder {
        constructor() {
            super(VehicleType.Scooter);
        }
        BuildFrame() {
            this.vehicle.parts[PartType.Frame] = "Scooter Frame";
        }
        BuildEngine() {
            this.vehicle.parts[PartType.Engine] = "50 cc";
        }
        BuildWheels() {
            this.vehicle.parts[PartType.Wheel] = "2";
        }
        BuildDoors() {
            this.vehicle.parts[PartType.Door] = "0";
        }
    }
    class Vehicle {
        constructor(vehicleType) {
            this.vehicleType = vehicleType;
            this._parts = {};
            this.vehicleType = vehicleType;
        }
        get parts() {
            return this._parts;
        }
        display() {
            console.log("---------------------------");
            console.log("Vehicle Type : " + VehicleType[this.vehicleType]);
            console.log("Frame :" + this.parts[PartType.Frame]);
            console.log("Engine :" + this.parts[PartType.Engine]);
            console.log("#Wheels :" + this.parts[PartType.Wheel]);
            console.log("#Doors :" + this.parts[PartType.Door]);
            console.log("---------------------------");
        }
    }
    let VehicleType;
    (function (VehicleType) {
        VehicleType[VehicleType["Car"] = 0] = "Car";
        VehicleType[VehicleType["Scooter"] = 1] = "Scooter";
        VehicleType[VehicleType["MotorCycle"] = 2] = "MotorCycle";
    })(VehicleType || (VehicleType = {}));
    let PartType;
    (function (PartType) {
        PartType[PartType["Frame"] = 0] = "Frame";
        PartType[PartType["Engine"] = 1] = "Engine";
        PartType[PartType["Wheel"] = 2] = "Wheel";
        PartType[PartType["Door"] = 3] = "Door";
    })(PartType || (PartType = {}));
    var shop = new Shop();
    shop.Construct(new ScooterBuilder());
    shop.ShowVehicle();
    shop.Construct(new CarBuilder());
    shop.ShowVehicle();
    shop.Construct(new MotorCycleBuilder());
    shop.ShowVehicle();
})(Builder || (Builder = {}));
//# sourceMappingURL=builder.js.map