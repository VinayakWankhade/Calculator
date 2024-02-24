function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function backspace() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    if (currentValue === 'Error' || currentValue === 'Infinity' || currentValue === '-Infinity') {
        clearDisplay();
        return;
    }
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}
function sqrt() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
}
