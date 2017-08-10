import { Observable as NativeScriptObservableNotToBeConfusedWithRxJsObservable } from 'data/observable';
import { Observable, Scheduler } from "rxjs";

const timeElapsed = Observable.defer(() => {
    const start = Scheduler.animationFrame.now();
    return Observable.interval(1)
        .map(() => Math.floor((Date.now() - start)));
});

const duration = (totalMs) =>
    timeElapsed
        .map(elapsedMs => elapsedMs / totalMs)
        .takeWhile(t => t <= 1);

const amount = (d) => (t) => t * d;

const elasticOut = (t) =>
    Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
    Math.pow(2.0, -10.0 * t) +
    1.0;


export class HelloWorldModel extends NativeScriptObservableNotToBeConfusedWithRxJsObservable {

    public blah: number = 25;

    constructor() {
        super();
    }

    public onTap() {
        duration(2000)
            .map(elasticOut)
            .map(amount(150))
            .subscribe(newVal =>
                this.set('blah', newVal)
            );
    }
}