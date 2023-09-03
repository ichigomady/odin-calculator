import { operate } from './arithmetic_operations.js';

export function update_display(display, item) {
    let result;
    if (display.value == '') {
        enable_all_operator();
        disable_operator_equal();
        display.value = display.value + item.textContent;
    } else if (['+', '-', '*', '/'].includes(item.textContent)) {
        disable_all_operator();

        // handle if display.value already has an operator.\
        if (/[+\-*/]/.test(display.value)) {
            result = operate(display.value);
            result = Number.isInteger(result[1]) 
                        ? result[1] 
                        : result[1].toFixed(2);
            console.log(result)
        } else {
            result = display.value
        }

        display.value = result + item.textContent;
    } else if (item.textContent === '=') {
        result = operate(display.value);

        //handling operate output
        if (result[0] == 0) {
            // success
            display.value = Number.isInteger(result[1]) ? result[1] : result[1].toFixed(2);
        } else {
            // error
            disable_all_operator();
            display.value = result[1];
        }
    } else {
        enable_all_operator();
        display.value = display.value + item.textContent;
    }
}

export function disable_all_operator() {
    document.querySelectorAll('.operator').forEach((item) => {
        item.disabled = true;
    });
    toggle_num_dot();
}

function enable_all_operator() {
    document.querySelectorAll('.operator').forEach((item) => {
        item.disabled = false;
    })
}

function disable_operator_equal() {
    document.querySelector('.operator_equal').disabled = true;
}

export function toggle_num_dot(){
    document.querySelector('.num_dot').disabled 
    ? document.querySelector('.num_dot').disabled = false
    : document.querySelector('.num_dot').disabled = true;
}