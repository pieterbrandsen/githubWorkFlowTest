// log every seconds elapsed since starting and exit after 10 hours
function sleep(num) {
	let now = new Date();
	const stop = now.getTime() + num;
	while(true) {
		now = new Date();
		if(now.getTime() > stop) return;
	}
}

let i = 0;
while (i< 1*60) {
    sleep(1000)
    i++;
    console.log(i);
}