var memory_array = ['A', 'A','B', 'B','C', 'C','D', 'D'Q,'E', 'E','F', 'F','G', 'G','H', 'H','I', 'I','Z', 'Z','X', 'X','Y', 'Y'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.method_tile_snuffle = function () {
  var i = this.length, j, temp;
  while(--i > 0){
   j = Math.floor(Math.random() * (i+1));
   temp = this[i];
   this[j] = this[i];
   this[i] = temp; 
  }
};


function newBoard(){
	tiles_flipped = 0;
	var output = '';
	memory_array.method_tile_snuffle();
	for(var i=0, i<memory_array.length; i++){
	output += '<div id="tile_'+ i + 
	'"onclick = "memoryFlipTile(this, \'' + memory_array[i] + '\')"></div>';
	} 
	document.getElementById('memory_board').innerHTML = output;
}