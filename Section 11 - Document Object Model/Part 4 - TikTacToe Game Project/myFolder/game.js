// var one = document.querySelector('#one')
// var two = document.querySelector('#two')
// var three = document.querySelector('#three')

// var four = document.querySelector('#four')
// var five = document.querySelector('#five')
// var six = document.querySelector('#six')

// var seven = document.querySelector('#seven')
// var eight = document.querySelector('#eight')
// var nine = document.querySelector('#nine')

// one.addEventListener('click', function(){
//     one.textContent = 'X';
// })
// two.addEventListener('click', function(){
//     two.textContent = 'X';
// })
// three.addEventListener('click', function(){
//     three.textContent = 'X';
// })
// four.addEventListener('click', function(){
//     four.textContent = 'X';
// })
// five.addEventListener('click', function(){
//     five.textContent = 'X';
// })
// six.addEventListener('click', function(){
//     six.textContent = 'X';
// })
// seven.addEventListener('click', function(){
//     seven.textContent = 'X';
// })
// eight.addEventListener('click', function(){
//     eight.textContent = 'X';
// })
// nine.addEventListener('click', function(){
//     nine.textContent = 'X';
// })


// one.addEventListener('dblclick', function(){
//     one.textContent = 'O';
// })
// two.addEventListener('dblclick', function(){
//     two.textContent = 'O';
// })
// three.addEventListener('dblclick', function(){
//     three.textContent = 'O';
// })
// four.addEventListener('dblclick', function(){
//     four.textContent = 'O';
// })
// five.addEventListener('dblclick', function(){
//     five.textContent = 'O';
// })
// six.addEventListener('dblclick', function(){
//     six.textContent = 'O';
// })
// seven.addEventListener('dblclick', function(){
//     seven.textContent = 'O';
// })
// eight.addEventListener('dblclick', function(){
//     eight.textContent = 'O';
// })
// nine.addEventListener('dblclick', function(){
//     nine.textContent = 'O';
// })


// var universal = document.querySelectorAll("td")
// // var one = document.querySelectorAll('#one')

// for(var j=0; j<9; j++){ 
//     if (universal[j].textContent == ''){
//         universal[j].addEventListener('click', function(){
//             this.textContent = 'X';
//         })
//     }
// }

// for(var j=0; j<9; j++){ 
//     if(universal[j].textContent == 'X'){
//         universal[j].addEventListener('click', function(){
//             this.textContent = 'O';
//         })
//     }
// }



    // for(var j=0; j<9; j++){ 
    //     universal[j].addEventListener('dblclick', function(){
    //         this.textContent = 'O';
    //     })
    // }

// one.addEventListener('click', function(){
//     one.textContent='X';
//     }
// )

// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");


// Clear Squares Function
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
}

}
restart.addEventListener('click',clearBoard)




// Create a function that will check the square marker
function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
        this.textContent = 'O';
    }else {
        this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
