
var PID = require('pid-controller');

var temp=50;
var ctr = new PID(50, 66, 10,2,1, PID.DIRECT )
ctr.setMode(ctr.AUTOMATIC);
ctr.setTunings(10,2,1);
ctr.setOutputLimits(0,100);
ctr.setInput(temp); 

// 
function checktemp() {
	ctr.compute();
	console.log(ctr);
}

function faketemp() {
	//temp=Math.round((temp+.1));
	if ( temp < 69 ) temp=(temp+.1);
	console.log(temp);
	ctr.setInput(temp); 
}

ctr.compute(); 

setInterval(checktemp, 1000 );
setInterval(faketemp, 700 );

