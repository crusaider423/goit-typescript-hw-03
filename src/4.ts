class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`Person entered the house.`);
        } else {
            console.log(`Cannot come in. The door is closed.`);
        }
    }
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log(`The door is opened.`);
        } else {
            console.log(`Cannot open the door. Invalid key.`);
        }
    }
}

// Виконання сценарію
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

