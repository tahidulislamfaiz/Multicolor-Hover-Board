let container = document.getElementById('container');

let colors = ['#e74c3c', '#8e44ad', '#3498db', '#56ff53ff', '#ff9538ff', '#ff29adff'];

let sqe = 506;

for (let i = 0; i < sqe; i++) {
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', (e) => setColor(e.target));

    square.addEventListener('mouseout', (e) => removeColor(e.target));


    container.appendChild(square)
}

function setColor(e) {
    let color = rendomColor();
    e.style.background = color;
   e.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`;
}

function rendomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
 
}

function removeColor (e){
    e.style.background='rgb(34, 37, 41)';
    e.style.boxShadow=`0 0 2px rgb(34, 37, 41) `
}


// let container = document.getElementById('container');

// let colors = ['#e74c3c', '#8e44ad', '#3498db', '#56ff53ff', '#ff9538ff', '#ff29adff'];

// let sqar = 506;

// for (let i = 0; i < sqar; i++) {
//     let square = document.createElement('div');
//     square.classList.add('square');

//     square.addEventListener('mouseover', function (e) {
//         setColor(e.target)
//     })
//     square.addEventListener('mouseout', function (e) {
//         removecolor(e.target)
//     })
//     container.appendChild(square);
// }

// function setColor(e) {
//     let color = randomColor();
//     e.style.background = color;
//     e.style.boxShadow=`0 0 4px ${color},0 0 10px ${color}`

// }

// function removecolor(e) {
//     e.style.background='rgb(34, 37, 41)';
//      e.style.boxShadow=`0 0 4px rgb(34,37,41)`
// }

// function randomColor() {
//     return colors[Math.floor(Math.random() * colors.length)];
// }
