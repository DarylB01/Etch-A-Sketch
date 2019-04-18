var body = document.body;

var grid = document.createElement("div");
grid.className = "grid";
body.appendChild(grid);

var colors = ["red box","green box", "blue box", "yellow box"];
var anycolor = colors[Math.floor(Math.random() * colors.length)];

var rowscols;

var draw = document.querySelector("#draw")
var erase = document.querySelector("#erase");  
var clear = document.getElementsByClassName("box")
var color = document.querySelector("#color");
allbuttons = document.getElementsByClassName("button");
var reset = document.querySelector("#reset");
    reset.addEventListener("click", () => {resetbutton()});
        function resetbutton() {
            for (i = 0; i < clear.length ; i++ ) {
                clear[i].classList.remove("red");
                clear[i].classList.remove("black");
                clear[i].classList.remove("blue");
                clear[i].classList.remove("yellow");
                clear[i].classList.remove("green");
            }
}
function randomcolor(e) {
    var anycolor = colors[Math.floor(Math.random() * colors.length)];
    e.target.className = anycolor;
}
function drawblack(e) {
    e.target.className = "black box";
}
function erasecolor(e) {
    e.target.className = "box";
}

var setboxes = document.querySelector("#setbox");
    setboxes.addEventListener('click', () => {creategrid()});
    setboxes.addEventListener('click', () => {changepointer()})
        function changepointer () {
            body.style.cursor = "auto";
            draw.style.cursor = "auto";
            erase.style.cursor = "auto";
            reset.style.cursor = "auto";
            setboxes.style.cursor = "auto";
            color.style.cursor = "auto";
        }

function creategrid () {
    rowscols = prompt("How many boxes per side? (Max : 20)");
    if (rowscols === null) {
        return;
    }
    if (rowscols > 21) {
        alert("Please input a number less than 21");
    }
    else if (rowscols < 1) {
        alert("Please input a number more than 0 (Max : 20)");
    }
    if (rowscols < 21 && rowscols > 0) {
        while (grid.hasChildNodes()){
            grid.removeChild(grid.lastChild);
            }   
            grid.style.setProperty('grid-template-columns', 'repeat(' + rowscols + ', 1fr)');
            grid.style.setProperty('grid-template-rows', 'repeat(' + rowscols + ', 1fr)');
            var gridnumber = rowscols * rowscols;
    for (i = 0; i < gridnumber; i ++) {
            let gridcol = document.createElement("div");
            gridcol.className = "box";
            grid.appendChild(gridcol);        
                draw.addEventListener('click', () => {startDrawing()});
                function startDrawing() {
                    draw.style.cursor = "url('icons/pencil.png') 2 28, default";
                    erase.style.cursor = "url('icons/pencil.png') 2 28, default";
                    reset.style.cursor = "url('icons/pencil.png') 2 28, default";
                    setboxes.style.cursor = "url('icons/pencil.png') 2 28, default";
                    color.style.cursor = "url('icons/pencil.png') 2 28, default";
                    body.style.cursor = "url('icons/pencil.png') 2 28, default";
                    gridcol.removeEventListener('mouseover', randomcolor);
                    gridcol.removeEventListener('mouseover', erasecolor);
                    gridcol.addEventListener('mouseover', drawblack);
                }
                erase.addEventListener('click', () => {startErasing()});
                function startErasing() {
                    draw.style.cursor = "url('icons/eraser.png') 2 28, default";
                    erase.style.cursor = "url('icons/eraser.png') 2 28, default";
                    reset.style.cursor = "url('icons/eraser.png') 2 28, default";
                    setboxes.style.cursor = "url('icons/eraser.png') 2 28, default";
                    color.style.cursor = "url('icons/eraser.png') 2 28, default";
                    body.style.cursor = "url('icons/eraser.png') 2 28, default";
                    gridcol.removeEventListener('mouseover', randomcolor);
                    gridcol.removeEventListener('mouseover', drawblack);
                    gridcol.addEventListener('mouseover', erasecolor);
                }
                color.addEventListener('click', () => {startColoring()});
                function startColoring() {
                    draw.style.cursor = "url('icons/brush.png') 2 28, default";
                    erase.style.cursor = "url('icons/brush.png') 2 28, default";
                    reset.style.cursor = "url('icons/brush.png') 2 28, default";
                    setboxes.style.cursor = "url('icons/brush.png') 2 28, default";
                    color.style.cursor = "url('icons/brush.png') 2 28, default";
                    body.style.cursor = "url('icons/brush.png') 2 28, default";
                    gridcol.removeEventListener('mouseover', erasecolor);
                    gridcol.removeEventListener('mouseover', drawblack);
                    gridcol.addEventListener('mouseover', randomcolor);
                }            
        }
    } 
}


