var body = document.body;

var grid = document.createElement("div");
grid.className = "grid";
body.appendChild(grid);

var colors = ['#ff0000', '#00ff00', '#0000ff'];
var anycolor = colors[Math.floor(Math.random() * colors.length)];

var rowscols;

var draw = document.querySelector("#draw")

var erase = document.querySelector("#erase");
    
var clear = document.getElementsByClassName("blackbox");

var reset = document.querySelector("#reset");
    reset.addEventListener("click", () => {resetbutton()});
        function resetbutton() {
            for (i = 0; i < clear.length ; i++ ) {
                clear[i].classList.add("gridbox");
            }
}
function randomcolor() {
    e.target.style.color = anycolor;
}
function changecolor(e) {
    e.target.className = "blackbox";
}
function erasecolor(e) {
    e.target.className = "gridbox";
}

var setbox = document.querySelector("#setbox");
    setbox.addEventListener('click', () => {creategrid()});

function creategrid () {
    rowscols = prompt("How many boxes per side?");
    if (rowscols > 50) {
        alert("Please input a number less than 50");}
    else if (rowscols < 1) {
        alert("Please input a number more than 0");
    }
    if (rowscols < 51 && rowscols > 0) {
        while (grid.hasChildNodes()){
            grid.removeChild(grid.lastChild);
            }   
            grid.style.setProperty('grid-template-columns', 'repeat(' + rowscols + ', 1fr)');
            grid.style.setProperty('grid-template-rows', 'repeat(' + rowscols + ', 1fr)');
            var gridnumber = rowscols * rowscols;
    for (i = 0; i < gridnumber; i ++) {
            let gridcol = document.createElement("div");
            gridcol.className = "gridbox";
            grid.appendChild(gridcol);        
                draw.addEventListener('click', () => {startdrawing()});
                function startdrawing() {
                    gridcol.removeEventListener('mouseover', erasecolor)
                    gridcol.addEventListener('mouseover', changecolor);
                }
                erase.addEventListener('click', () => {startErasing()});
                function startErasing() {
                    gridcol.removeEventListener('mouseover', changecolor);
                    gridcol.addEventListener('mouseover', erasecolor);
                }             
        }
    } 
}


