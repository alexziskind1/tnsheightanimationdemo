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
    }
    AppComponent.prototype.onTap = function (lbl) {
        duration(2000)
            .map(elasticOut)
            .map(amount(250))
            .subscribe(function (curFrame) {
            lbl.style.height = curFrame;
        }, function (er) { return console.error(er); }, function () { return console.log('booya!'); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        template: "\n        <StackLayout class=\"wrapper\" (tap)=\"onTap(lbl)\">\n            <Label #lbl class=\"thelabel\" text=\"Hello\"></Label>\n        </StackLayout>\n    ",
        styles: [
            "\n            .wrapper {\n                text-align: center;\n            }\n            .thelabel {\n                background-color: red;\n                color: white;\n            }\n        "
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkJBQTZDO0FBRzdDLElBQU0sV0FBVyxHQUFHLGlCQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2pDLElBQU0sS0FBSyxHQUFHLGdCQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEIsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHLFVBQUMsT0FBTztJQUNyQixPQUFBLFdBQVc7U0FDTixHQUFHLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLEdBQUcsT0FBTyxFQUFuQixDQUFtQixDQUFDO1NBQ3JDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDO0FBRjNCLENBRTJCLENBQUM7QUFFaEMsSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFaLENBQVksQ0FBQztBQUVuQyxJQUFNLFVBQVUsR0FBRyxVQUFDLENBQUM7SUFDakIsT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDeEIsR0FBRztBQUhILENBR0csQ0FBQztBQXNCUixJQUFhLFlBQVk7SUFBekI7SUFZQSxDQUFDO0lBWEcsNEJBQUssR0FBTCxVQUFNLEdBQVU7UUFDWixRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ1QsR0FBRyxDQUFDLFVBQVUsQ0FBQzthQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEIsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNmLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBQSxFQUFFLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFqQixDQUFpQixFQUN2QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FDMUIsQ0FBQztJQUNWLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksWUFBWTtJQXBCeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxrS0FJVDtRQUNELE1BQU0sRUFBRTtZQUNKLHVNQVFDO1NBQ0o7S0FDSixDQUFDO0dBRVcsWUFBWSxDQVl4QjtBQVpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFNjaGVkdWxlciB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcblxuY29uc3QgdGltZUVsYXBzZWQgPSBPYnNlcnZhYmxlLmRlZmVyKCgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9IFNjaGVkdWxlci5hbmltYXRpb25GcmFtZS5ub3coKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5pbnRlcnZhbCgxKVxuICAgICAgICAubWFwKCgpID0+IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBzdGFydCkpKTtcbn0pO1xuXG5jb25zdCBkdXJhdGlvbiA9ICh0b3RhbE1zKSA9PlxuICAgIHRpbWVFbGFwc2VkXG4gICAgICAgIC5tYXAoZWxhcHNlZE1zID0+IGVsYXBzZWRNcyAvIHRvdGFsTXMpXG4gICAgICAgIC50YWtlV2hpbGUodCA9PiB0IDw9IDEpO1xuXG5jb25zdCBhbW91bnQgPSAoZCkgPT4gKHQpID0+IHQgKiBkO1xuXG5jb25zdCBlbGFzdGljT3V0ID0gKHQpID0+XG4gICAgTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKlxuICAgICAgICBNYXRoLlBJIC8gMikgKlxuICAgIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArXG4gICAgMS4wO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJ3cmFwcGVyXCIgKHRhcCk9XCJvblRhcChsYmwpXCI+XG4gICAgICAgICAgICA8TGFiZWwgI2xibCBjbGFzcz1cInRoZWxhYmVsXCIgdGV4dD1cIkhlbGxvXCI+PC9MYWJlbD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRoZWxhYmVsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICBgXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgb25UYXAobGJsOiBMYWJlbCkge1xuICAgICAgICBkdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLm1hcChlbGFzdGljT3V0KVxuICAgICAgICAgICAgLm1hcChhbW91bnQoMjUwKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY3VyRnJhbWUgPT4ge1xuICAgICAgICAgICAgICAgIGxibC5zdHlsZS5oZWlnaHQgPSBjdXJGcmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlciA9PiBjb25zb2xlLmVycm9yKGVyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdib295YSEnKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=