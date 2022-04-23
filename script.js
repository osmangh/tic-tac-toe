let cells = document.querySelectorAll('.cell');
cells=Array.from(cells)
let currentPlayer = 'X';
let winnigCombination=[
[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
function checkForWinner(){
    winnigCombination.forEach(function(combination){
        let check = combination.every(ind=>cells[ind].innerText.trim () == currentPlayer)
        if(check)
        {highLightCells(combination)

        }
    })
}
function highLightCells(combination){
    combination.forEach(function(ind){
        cells[ind].classList.add('highlight')
    })
}

cells.forEach(function(cell){
    cell.addEventListener('click',function(){
        if(cell.innerText.trim!="")
        return;
         
    })
    
    
    cell.innerText=currentPlayer;
        currentPlayer=currentPlayer=="X" ? "0" :"X";
        checkForWinner()  ;   
   
})
