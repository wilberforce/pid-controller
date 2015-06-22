# node-pid-controller

Node.js PID controller

An advanced PID controller based on the Arduino PID library

## Installation

      $ npm install pid-controller

## Example

##### Temperture Controle Simulation
```
var temperture = 10,
    tempertureSetpoint = 21,
    heating = 0.001,
    cooling = -0.0005;

var Kp = 500,
    Ki = 200,
    Kd = 0;

var ctr = new PID(temperture, tempertureSetpoint, Kp, Ki, Kd, 'direct'),
    timeframe = 1000;

ctr.setSampleTime(timeframe);
ctr.setOutputLimits(0, timeframe);
ctr.setMode('auto');

var temperturesimulation = function() {
    if (typeof temperturesimulation.counter == 'undefined') {
        temperturesimulation.counter = 0;
    }
    ctr.setInput(temperture);
    ctr.compute();
    temperture += ctr.getOutput() * heating + (timeframe - ctr.getOutput()) * cooling;
    if (Math.round(temperture * 100) / 100 == 21) {
        temperturesimulation.counter++;
        if (temperturesimulation.counter == 5) {
            ctr.setMode('manual');
            ctr.setOutput(0);
            temperturesimulation.counter = 0;
        }
    }
    if (Math.round(temperture * 100) / 100 == 1) {
        ctr.setMode('auto');
    }
    console.log("Output : " + ctr.getOutput() + " ; Temp : " + Math.round(temperture * 100) / 100 + "°c");
};
setInterval(temperturesimulation, timeframe);
```

## Author

Rhys Williams
