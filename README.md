# pid-controller

Node.js PID controller

An advanced PID controller based on the Arduino PID library

## Installation

      $ npm install pid-controller

## Use



## Example

##### Temperature Control Simulation
```
var PID = require('pid-controller');

var temperature = 10,
    temperatureSetpoint = 21,
    heating = 0.001,
    cooling = -0.0005;

var Kp = 500,
    Ki = 200,
    Kd = 0;

var ctr = new PID(temperature, temperatureSetpoint, Kp, Ki, Kd, 'direct'),
    timeframe = 1000;

ctr.setSampleTime(timeframe);
ctr.setOutputLimits(0, timeframe);
ctr.setMode('auto');

var temperaturesimulation = function() {
    if (typeof temperaturesimulation.counter == 'undefined') {
        temperaturesimulation.counter = 0;
    }
    ctr.setInput(temperature);
    ctr.compute();
    temperature += ctr.getOutput() * heating + (timeframe - ctr.getOutput()) * cooling;
    if (Math.round(temperature * 100) / 100 == 21) {
        temperaturesimulation.counter++;
        if (temperaturesimulation.counter == 5) {
            ctr.setMode('manual');
            ctr.setOutput(0);
            temperaturesimulation.counter = 0;
        }
    }
    if (Math.round(temperature * 100) / 100 == 1) {
        ctr.setMode('auto');
    }
    console.log("Output : " + ctr.getOutput() + " ; Temp : " + Math.round(temperature * 100) / 100 + "°c");
};
setInterval(temperaturesimulation, timeframe);
```

## Author

Rhys Williams
