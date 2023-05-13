interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class ConcreteSubject implements Subject {
    private state: number;
    private observers: Observer[] = [];

    public getState(): number {
        return this.state;
    }

    public setState(state: number): void {
        this.state = state;
        this.notify();
    }

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.setState(Math.floor(Math.random() * (10 + 1)));
        console.log('Subject: My state has just changed to: ' + this.getState());
        this.notify();
    }

}

/**
 * Las claves que van a ser observadas
 */

class OberverA implements Observer{
    public update(subject: Subject): void {
        console.log('ObserverA: Reacted to the event.');
        
        if (subject instanceof ConcreteSubject && subject.getState() < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class OberverB implements Observer{
    public update(subject: Subject): void {
        console.log('ObserverB: Reacted to the event.');
        
        if (subject instanceof ConcreteSubject && (subject.getState() === 0 && subject.getState() >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

/**
 * El cliente code
 */

const subject = new ConcreteSubject();
const observerA = new OberverA();
const observerB = new OberverB();

subject.attach(observerA);
subject.attach(observerB);

subject.someBusinessLogic();

subject.detach(observerB);

subject.someBusinessLogic();