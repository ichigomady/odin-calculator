// functions definitions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

export function operate(expression) {
    // returns [statusCode, result]
    // 0: success, 1: error
    let num1, operator, num2;

    // handling if num1 is -ve
    if (expression.startsWith('-')) {
        [num1, operator, num2] = expression.slice(1).split(/([+\-*/])/);
        num1 = '-' + num1;
    } else {
        [num1, operator, num2] = expression.split(/([+\-*/])/);
    }

    // handling divide by 0
    if (operator == '/' && num2 == '0') {
        alert('cannot divide by 0');
        return [1, expression.slice(0, -1)];
    }

    switch (operator) {
        case '+':
            return [0, add(Number(num1), Number(num2))];
        case '-':
            return [0, subtract(Number(num1), Number(num2))];
        case '*':
            return [0, multiply(Number(num1), Number(num2))];
        case '/':
            return [0, division(Number(num1), Number(num2))];

        default:
            alert('Unknown operator')
            return [1, 'error'];
    }
}