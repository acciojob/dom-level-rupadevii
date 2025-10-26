//your JS code here. If required.
function getLevel(element){
	if(!element) return -1;

	let depth = 1;

	let currentEl = element;

	while(currentEl && currentEl !== document.documentElement){
		currentEl = currentEl.parentElement;
		depth += 1;
	}

	return depth;
}

const targetEl = document.getElementById('level');
alert(`Level: ${getLevel(targetEl)}`)
	