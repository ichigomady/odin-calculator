import { update_display, disable_all_operator, toggle_num_dot } from "./calc_fun/util.js";

let display = document.querySelector('#display');

document.addEventListener('DOMContentLoaded', () => {
    disable_all_operator();
    toggle_num_dot();
})

// Add clear functionality
document.querySelector('#clear').addEventListener('click', () => {
    display.value = '';
    disable_all_operator();
    toggle_num_dot();
})

// update display on click
document.querySelectorAll('.row_item').forEach((item) => {
    item.addEventListener('click', () => {
        update_display(display, item);
    })
})

document.querySelector('.num_dot').addEventListener('click', () => {
    toggle_num_dot();
})


