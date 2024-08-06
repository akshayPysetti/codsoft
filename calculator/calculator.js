
let displayEl = document.getElementById('calDisplay');

function append(value) {
	displayEl.value += value;
}

function clearDisplay() {
	displayEl.value = '';
}

function deleteLast() {
	displayEl.value = display.value.slice(0, -1);
}

function calculate() {
	try {
		displayEl.value = eval(displayEl.value);
	} catch (e) {
		displayEl.value = 'Error';
	}
}