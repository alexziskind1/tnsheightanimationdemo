"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var timeElapsed = rxjs_1.Observable.defer(function () {
    var start = rxjs_1.Scheduler.animationFrame.now();
    return rxjs_1.Observable.interval(1)
        .map(function () { return Math.floor((Date.now() - start)); });
});
var duration = function (totalMs) {
    return timeElapsed
        .map(function (elapsedMs) { return elapsedMs / totalMs; })
        .takeWhile(function (t) { return t <= 1; });
};
var amount = function (d) { return function (t) { return t * d; }; };
var elasticOut = function (t) {
    return Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
        Math.pow(2.0, -10.0 * t) +
        1.0;
};
var AppComponent = (function () {
    function AppComponent() {
        this.blah$ = rxjs_1.Observable.of(25);
    }
    AppComponent.prototype.onTap = function () {
        this.blah$ = duration(2000)
            .map(elasticOut)
            .map(amount(150));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        template: "\n        <StackLayout class=\"wrapper\" (tap)=\"onTap($event)\">\n            <Label class=\"thelabel1\" text=\"Hello\" [height]=\"blah$ | async\"></Label>\n            <Label class=\"thelabel2\" text=\"Hello\" [height]=\"blah$ | async\"></Label>\n        </StackLayout>\n    ",
        styles: [
            "\n            .wrapper {\n                text-align: center;\n            }\n            .thelabel1 {\n                background-color: red;\n                color: white;\n            }\n            .thelabel2 {\n                background-color: green;\n                color: white;\n            }\n        "
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkJBQTZDO0FBRzdDLElBQU0sV0FBVyxHQUFHLGlCQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2pDLElBQU0sS0FBSyxHQUFHLGdCQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEIsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHLFVBQUMsT0FBTztJQUNyQixPQUFBLFdBQVc7U0FDTixHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLEdBQUcsT0FBTyxFQUFuQixDQUFtQixDQUFDO1NBQ3JDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDO0FBRjNCLENBRTJCLENBQUM7QUFFaEMsSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFaLENBQVksQ0FBQztBQUVuQyxJQUFNLFVBQVUsR0FBRyxVQUFDLENBQUM7SUFDakIsT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDeEIsR0FBRztBQUhILENBR0csQ0FBQztBQTJCUixJQUFhLFlBQVk7SUF6QnpCO1FBMEJJLFVBQUssR0FBdUIsaUJBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFNbEQsQ0FBQztJQUxHLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQVUsQ0FBQzthQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFlBQVk7SUF6QnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsdVJBS1Q7UUFDRCxNQUFNLEVBQUU7WUFDSiwwVEFZQztTQUNKO0tBQ0osQ0FBQztHQUVXLFlBQVksQ0FPeEI7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5cbmNvbnN0IHRpbWVFbGFwc2VkID0gT2JzZXJ2YWJsZS5kZWZlcigoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBTY2hlZHVsZXIuYW5pbWF0aW9uRnJhbWUubm93KCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuaW50ZXJ2YWwoMSlcbiAgICAgICAgLm1hcCgoKSA9PiBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gc3RhcnQpKSk7XG59KTtcblxuY29uc3QgZHVyYXRpb24gPSAodG90YWxNcykgPT5cbiAgICB0aW1lRWxhcHNlZFxuICAgICAgICAubWFwKGVsYXBzZWRNcyA9PiBlbGFwc2VkTXMgLyB0b3RhbE1zKVxuICAgICAgICAudGFrZVdoaWxlKHQgPT4gdCA8PSAxKTtcblxuY29uc3QgYW1vdW50ID0gKGQpID0+ICh0KSA9PiB0ICogZDtcblxuY29uc3QgZWxhc3RpY091dCA9ICh0KSA9PlxuICAgIE1hdGguc2luKC0xMy4wICogKHQgKyAxLjApICpcbiAgICAgICAgTWF0aC5QSSAvIDIpICpcbiAgICBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgK1xuICAgIDEuMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwid3JhcHBlclwiICh0YXApPVwib25UYXAoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwidGhlbGFiZWwxXCIgdGV4dD1cIkhlbGxvXCIgW2hlaWdodF09XCJibGFoJCB8IGFzeW5jXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInRoZWxhYmVsMlwiIHRleHQ9XCJIZWxsb1wiIFtoZWlnaHRdPVwiYmxhaCQgfCBhc3luY1wiPjwvTGFiZWw+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aGVsYWJlbDEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGhlbGFiZWwyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBibGFoJDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gT2JzZXJ2YWJsZS5vZigyNSk7XG4gICAgb25UYXAoKSB7XG4gICAgICAgIHRoaXMuYmxhaCQgPSBkdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLm1hcChlbGFzdGljT3V0KVxuICAgICAgICAgICAgLm1hcChhbW91bnQoMTUwKSk7XG4gICAgfVxufVxuIl19