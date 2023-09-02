import { update_display, disable_all_operator } from "./calc_fun/util.js";

let display = document.querySelector('#display');

document.addEventListener('DOMContentLoaded', () => {
    disable_all_operator();
})

// Add clear functionality
document.querySelector('#clear').addEventListener('click', () => {
    display.value = '';
    disable_all_operator();
})

// update display on click
document.querySelectorAll('.row_item').forEach((item) => {
    item.addEventListener('click', () => {
        update_display(display, item);
    })
})


