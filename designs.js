document.getElementById("sizePicker").addEventListener("submit", create);

function create(e) {
  e.preventDefault();
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;
  makeGrid(height, width);
}
updateTableSize();
//var arr;
//var noArr = 0;

var color = "#000000";
const white = "#fffafa";

function grayColor(){
    color = "#6C757D";
}
function greenColor(){
    color = "#28A745";
}
function yellowColor(){
    color = "#E0A800";
}
function redColor(){
    color = "#C82333";
}
function originColor(){
    color = white;
}

function updateTableSize(){
  var tablesize=document.getElementById("tableSize");
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;
  tablesize.innerHTML = height+"*"+width;
}

var firstGrid = true;
function makeGrid(h, w) {
    if(firstGrid)
        firstGrid = false;
        // else
        // return;
    var width = parseInt(w);
    var arr = new Array(h*w);
    noArr = 0;
    
  document.querySelector('#pixelCanvas').innerHTML = ''; // to delete last grid
  const table = document.querySelector('#pixelCanvas');
  for (let x = 0; x < h; x++) {
    const r = table.insertRow(x);
    for (let y = 0; y < w; y++) {
      const c = r.insertCell(y);
        arr[noArr] = c;
        noArr++;
        c.innerHTML = noArr;
        c.setAttribute('class', 'rounded-circle');
        c.style.fontWeight = 'bold';
        c.style.fontSize = "18px"
        c.style.color = "#3366ff";
        c.style.backgroundColor = "#ffffff";
      r.appendChild(c);
        
      c.addEventListener('click', function() {
//          alert(document.querySelector('#btnGreen').className);
        c.style.backgroundColor = color;
        if(color == white){
        c.style.color = "#007bff";
        }
        else{
          
          c.style.color = "#FFFAFA";
          for(let s = 0;s<noArr;s++){
              if(c == arr[s]){
                  try{
                      if((s+1)%width!=0)
                        {arr[s+1].style.backgroundColor = color; 
                        arr[s+1].style.color = "#FFFAFA";}
                  }catch(err){}
                  try{
                      if((s)%width!=0)
                        {arr[s-1].style.backgroundColor = color;
                      arr[s-1].style.color = "#FFFAFA";}
                  }catch(err){}
                  try{
                    arr[s+width].style.backgroundColor = color;
                      arr[s+width].style.color = "#FFFAFA";
                  }catch(err){}
                  try{
                     arr[s-width].style.backgroundColor = color;
                      arr[s-width].style.color = "#FFFAFA";
                  }catch(err){}
                  break;
              }
                  
          }
        }
      });
    }
    table.appendChild(r);
  } 
}
