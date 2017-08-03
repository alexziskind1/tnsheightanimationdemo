import { Component } from "@angular/core";
import { Observable, Scheduler } from "rxjs";
import { Label } from 'ui/label';

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

@Component({
    selector: "ns-app",
    template: `
        <StackLayout class="wrapper" (tap)="onTap($event)">
            <Label class="thelabel1" text="Hello" [height]="blah$ | async"></Label>
            <Label class="thelabel2" text="Hello" [height]="blah$ | async"></Label>
        </StackLayout>
    `,
    styles: [
        `
            .wrapper {
                text-align: center;
            }
            .thelabel1 {
                background-color: red;
                color: white;
            }
            .thelabel2 {
                background-color: green;
                color: white;
            }
        `
    ]
})

export class AppComponent {
    blah$: Observable<number> = Observable.of(25);
    onTap() {
        this.blah$ = duration(2000)
            .map(elasticOut)
            .map(amount(150));
    }
}
