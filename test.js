var PID = require('./lib/index.js');
var ctr = new PID(20, 60, 1, 0.1, 0.1, 'direct');
ctr.setSampleTime(1000);
ctr.setMode('auto');

setInterval(function() {
    ctr.compute();
    console.log(ctr);
    console.log(ctr.getMode());
}, 1000);