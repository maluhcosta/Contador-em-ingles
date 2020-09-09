const numbers = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten'
};

const colors = ['#b6da92', '#c9a9e7', '#b4b3b3', '#b2ebeb', '#f5f595', '#fab1b1'];

let count = 0;

const counter = document.querySelector('.counter');
const more = document.querySelector('.btn-more');
const less = document.querySelector('.btn-less');
const reset = document.querySelector('.btn-reset');
let writeNumber = document.querySelector('.write-count');



more.addEventListener('click', () => {
    count += 1;

    if (count > 10) {
        count = 10 
    }
    
    counter.innerHTML = count;
    writeNumber.innerHTML = numbers[count];
    
    const colorRandom = Math.floor(Math.random() * colors.length);
    document.querySelector('p').style.color = colors[colorRandom];
    document.querySelector('body').style.background = colors[colorRandom];
});

less.addEventListener('click', () => {
    count -= 1;
    
    if (count < 0) {
        count = 0 
    }

    counter.innerHTML = count;
    writeNumber.innerHTML = numbers[count];

    const colorRandom = Math.floor(Math.random() * colors.length);
    document.querySelector('p').style.color = colors[colorRandom];
    document.querySelector('body').style.background = colors[colorRandom];
});

reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
    writeNumber.innerHTML = 'Zero';

    const colorRandom = Math.floor(Math.random() * colors.length);
    document.querySelector('p').style.color = colors[colorRandom];
    document.querySelector('body').style.background = colors[colorRandom];
});

