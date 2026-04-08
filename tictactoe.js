var player = "";	  	     	    	        		  	       	
var plays = 0;	  	     	    	        		  	       	
var cells = document.getElementsByTagName("td");	  	     	    	        		  	       	
var gameStatus = document.getElementById("gamestatus");	  	     	    	        		  	       	
	  	     	    	        		  	       	
function changeCell()	  	     	    	        		  	       	
{	  	     	    	        		  	       	
  if ((player == 1 || player == "") && (this.innerHTML == "-"))	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    this.innerHTML = "X";	  	     	    	        		  	       	
    gameStatus.innerHTML = "GAME IS RUNNING";	  	     	    	        		  	       	
    player = 2;	  	     	    	        		  	       	
    plays++;	  	     	    	        		  	       	
    winner();	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
  else if (player == 2 && this.innerHTML == "-")	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    this.innerHTML = "O";	  	     	    	        		  	       	
    player = 1;	  	     	    	        		  	       	
    plays++;	  	     	    	        		  	       	
    winner();	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
  else	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    this.innerHTML = this.innerHTML;	  	     	    	        		  	       	
    player = player;	  	     	    	        		  	       	
    plays = plays;	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
	  	     	    	        		  	       	
  if (plays == 9)	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    gameStatus.innerHTML = "It is a draw!";	  	     	    	        		  	       	
    setTimeout(reset, 3000);	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
}	  	     	    	        		  	       	
	  	     	    	        		  	       	
function reset()	  	     	    	        		  	       	
{	  	     	    	        		  	       	
  for (var i = 0; i < cells.length; i++)	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    cells[i].innerHTML = "-";	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
  player = "";	  	     	    	        		  	       	
  plays = 0;	  	     	    	        		  	       	
  gameStatus.innerHTML = "GAME NOT RUNNING";	  	     	    	        		  	       	
}	  	     	    	        		  	       	
	  	     	    	        		  	       	
function winner()	  	     	    	        		  	       	
{	  	     	    	        		  	       	
  // Rows  	     	    	        		  	       	
  for (var r = 0; r < 7; r += 3)	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    if (cells[r].innerHTML != "-" && cells[r + 1].innerHTML != "-" && cells[r + 2].innerHTML != "-")	  	     	    	        		  	       	
    {	  	     	    	        		  	       	
      if (cells[r].innerHTML == cells[r + 1].innerHTML && cells[r].innerHTML == cells[r + 2].innerHTML)	  	     	    	        		  	       	
      {	  	     	    	        		  	       	
        gameStatus.innerHTML = "Player " + cells[r].innerHTML + " won!";	  	     	    	        		  	       	
        setTimeout(reset, 3000);	  	     	    	        		  	       	
      }	  	     	    	        		  	       	
    }	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
	  	     	    	        		  	       	
  // Columns 	     	    	        		  	       	
  for (var c = 0; c < 3; c++)	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    if (cells[c].innerHTML != "-" && cells[c + 3].innerHTML != "-" && cells[c + 6].innerHTML != "-")	  	     	    	        		  	       	
    {	  	     	    	        		  	       	
      if (cells[c].innerHTML == cells[c + 3].innerHTML && cells[c].innerHTML == cells[c + 6].innerHTML)	  	     	    	        		  	       	
      {	  	     	    	        		  	       	
        gameStatus.innerHTML = "Player " + cells[c].innerHTML + " won!";	  	     	    	        		  	       	
        setTimeout(reset, 3000);	  	     	    	        		  	       	
      }	  	     	    	        		  	       	
    }	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
	  	     	    	        		  	       	
  // Diagonals	  	     	    	        		  	       	
  if (cells[4].innerHTML != "-")	  	     	    	        		  	       	
  {	  	     	    	        		  	       	
    if (cells[4].innerHTML == cells[0].innerHTML && cells[4].innerHTML == cells[8].innerHTML)	  	     	    	        		  	       	
    {	  	     	    	        		  	       	
      gameStatus.innerHTML = "Player " + cells[4].innerHTML + " won!";	  	     	    	        		  	       	
      setTimeout(reset, 3000);	  	     	    	        		  	       	
    }	  	     	    	        		  	       	
    else if (cells[4].innerHTML == cells[2].innerHTML && cells[4].innerHTML == cells[6].innerHTML)	  	     	    	        		  	       	
    {	  	     	    	        		  	       	
      gameStatus.innerHTML = "Player " + cells[4].innerHTML + " won!";	  	     	    	        		  	       	
      setTimeout(reset, 3000);	  	     	    	        		  	       	
    }	  	     	    	        		  	       	
  }	  	     	    	        		  	       	
}	  	     	    	        		  	       	
	  	     	    	        		  	       	
for (var count = 0; count <= 8; count++)	  	     	    	        		  	       	
{	  	     	    	        		  	       	
  document.getElementsByTagName("td")[count].onclick = changeCell;	  	     	    	        		  	       	
}