const heading = document.querySelector('.heading')
const resetButton =document.querySelector('.reset-btn') 
const gameCells = document.querySelectorAll('.cell')


var isXturn=true;
var count =0;


const checkGameStatus=() =>{
  
    const index0classlist = gameCells[0].classList;
    const index1classlist = gameCells[1].classList;
    const index2classlist = gameCells[2].classList;
    const index3classlist = gameCells[3].classList;
    const index4classlist = gameCells[4].classList;
    const index5classlist = gameCells[5].classList;
    const index6classlist = gameCells[6].classList;
    const index7classlist = gameCells[7].classList;
    const index8classlist = gameCells[8].classList;
    
    if (index0classlist.contains('O')) {
        if (index1classlist.contains('O') && index2classlist.contains('O') ) {
            alert("O WON");
           
            
        }
        
    }
    if (index0classlist.contains('X')) {
        if (index1classlist.contains('X') && index2classlist.contains('X') ) {
            alert("X WON");
            
        }
        
    }
    if (index3classlist.contains('')) {
        if (index4classlist.contains('O') && index5classlist.contains('O') ) {
            alert("O WON");
            
        }
        
    }
    if (index3classlist.contains('X')) {
        if (index4classlist.contains('X') && index5classlist.contains('X') ) {
            alert("X WON");
            
        }
        
    }
    if (index6classlist.contains('O')) {
        if (index7classlist.contains('O') && index8classlist.contains('O') ) {
            alert("O WON");
            
        }
        
    }
    if (index6classlist.contains('X')) {
        if (index7classlist.contains('X') && index8classlist.contains('X') ) {
            alert("X WON");
            
        }
    }
    if (index0classlist.contains('O')) {
        if (index4classlist.contains('O') && index8classlist.contains('O') ) {
            alert("O WON");
            
        }
        
    }
    if (index0classlist.contains('X')) {
        if (index4classlist.contains('X') && index8classlist.contains('X') ) {
            alert("X WON");
            
        }
    }
    
    if (index2classlist.contains('O')) {
        if (index4classlist.contains('O') && index6classlist.contains('O') ) {
            alert("O WON");
            
        }
        
    }
    if (index2classlist.contains('X')) {
        if (index4classlist.contains('X') && index6classlist.contains('X') ) {
            alert("X WON");
            
        }
    }
    if (index0classlist.contains('O')) {
        if (index3classlist.contains('O') && index6classlist.contains('O') ) {
            alert("O WON");
            
        }
        
    }
    if (index0classlist.contains('X')) {
        if (index3classlist.contains('X') && index6classlist.contains('X') ) {
            alert("X WON");
            
        }
    }
    if (index1classlist.contains('O')) {
        if (index4classlist.contains('O') && index7classlist.contains('O') ) {
            alert("O WON");
            
        }
        
    }
    if (index1classlist.contains('X')) {
        if (index4classlist.contains('X') && index7classlist.contains('X') ) {
            alert("X WON");
            
        }
    }
    if (index2classlist.contains('O')) {
        if (index5classlist.contains('O') && index8classlist.contains('O') ) {
            alert("O WON");
            
            
        }
        
    }
    if (index2classlist.contains('X')) {
        if (index5classlist.contains('X') && index8classlist.contains('X') ) {
            alert("X WON");
            
        }
    }
    
    
    }
    



function cellHandler(event){
   const classList= event.target.classList;
   if(classList.length>1){
       return;
   }
   if(isXturn){
        classList.add("X")
        isXturn=false;
        heading.textContent="O's turn"

   }else{
       classList.add('O')
       isXturn=true;
       heading.textContent="X's turn"
   }
   count=count+1
   console.log(count)
   if(count >=5){
       checkGameStatus()
   }
}


for(cell of gameCells){
    cell.addEventListener('click',cellHandler)
}

const resetHandler=()=>{
    window.location.reload()
}


resetButton.addEventListener('click',resetHandler)
