const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


function makeGrid(e)
{
    makeRows(e);
    makeColumns(e);
}

function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

makeGrid(16);

function reset(e)
{  
    [].forEach.call(cello, function(el) {
        el.classList.remove("hover");
    });

};

function add (e) {
    // Add the "active" class to only divs with a "box" class
    e.target.classList.add("hover");

  
};
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function apply () {
    let u= document.getElementById('slider').value;
    removeAllChildNodes(container);
    makeRows(u);
    makeColumns(u);

  
};
const div = document.querySelector('div')
const cello = document.querySelectorAll(".cell");


    div.addEventListener('mouseover', add )

    const btns = document.getElementById("reset");
    btns.addEventListener('click',reset);

    const slider = document.getElementById("slider");
    btns.addEventListener('click',apply)
    const d = document.getElementById("slider").value;
    const out =document.getElementById("outpot");
    out.innerHTML(d);


