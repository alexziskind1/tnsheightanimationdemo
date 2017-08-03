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
        <StackLayout class="wrapper" (tap)="onTap(lbl)">
            <Label #lbl class="thelabel" text="Hello"></Label>
        </StackLayout>
    `,
    styles: [
        `
            .wrapper {
                text-align: center;
            }
            .thelabel {
                background-color: red;
                color: white;
            }
        `
    ]
})

export class AppComponent {
    onTap(lbl: Label) {
        duration(2000)
            .map(elasticOut)
            .map(amount(250))
            .subscribe(curFrame => {
                lbl.style.height = curFrame;
            },
            er => console.error(er),
            () => console.log('booya!')
            );
    }
}
