let canvas; 

let header, input, add, reset, remove;
let d = 90;
let tree; 

function setup() {

  // Painel 
  header = createElement('header', 'AVL Tree');
  input = createInput('0', 'number');
  add = createButton('Add');
  reset = createButton('Reset');
  remove = createButton('Remove');

  header.parent('#header');
  input.parent('#panel');
  add.parent('#panel');
  reset.parent('#panel');
  remove.parent('#panel');
  add.class('bttn-add');
  reset.class('bttn-reset');
  remove.class('bttn-remove'); 

  // Funções
  add.mousePressed(addNode);
  reset.mousePressed(resetTree);
  remove.mousePressed(removeNode);  

  // Canvas
  canvas = createCanvas(window.innerWidth - 40, window.innerHeight - 140);
  canvas.parent('#canvas');

  // Árvore
  tree = new Tree();
  
}
function resetTree(){
  tree.root = null;
}

function addNode(){
  const value = input.value();
  tree.insert(value);
}

function removeNode(){
  tree.remove(value);
}

function draw() {
  background('white');

  circle(canvas.width*1/2, canvas.height*1/8, d);

  line(canvas.width*1/2, canvas.height*1/8 + d/2, canvas.width*1/4, canvas.height*2.5/8 - d/2); 
  line(canvas.width*1/2, canvas.height*1/8 + d/2, canvas.width*3/4, canvas.height*2.5/8 - d/2); 

  circle(canvas.width*1/4, canvas.height*2.5/8, d); 
  circle(canvas.width*3/4, canvas.height*2.5/8, d); 

  line(canvas.width*1/4, canvas.height*2.5/8 + d/2, canvas.width*1/8, canvas.height*4/8 -d/2);
  line(canvas.width*1/4, canvas.height*2.5/8 + d/2, canvas.width*3/8, canvas.height*4/8 -d/2);
  line(canvas.width*3/4, canvas.height*2.5/8 + d/2, canvas.width*5/8, canvas.height*4/8 -d/2);
  line(canvas.width*3/4, canvas.height*2.5/8 + d/2, canvas.width*7/8, canvas.height*4/8 -d/2);

  circle(canvas.width*1/8, canvas.height*4/8, d); 
  circle(canvas.width*3/8, canvas.height*4/8, d); 
  circle(canvas.width*5/8, canvas.height*4/8, d); 
  circle(canvas.width*7/8, canvas.height*4/8, d); 

  line(canvas.width*1/8, canvas.height*4/8 + d/2, canvas.width*1/16, canvas.height*6/8 -d/2);
  line(canvas.width*1/8, canvas.height*4/8 + d/2, canvas.width*3/16, canvas.height*6/8 -d/2);

  line(canvas.width*3/8, canvas.height*4/8 + d/2, canvas.width*5/16, canvas.height*6/8 -d/2);
  line(canvas.width*3/8, canvas.height*4/8 + d/2, canvas.width*7/16, canvas.height*6/8 -d/2);

  circle(canvas.width*1/16, canvas.height*6/8, d); 
  circle(canvas.width*3/16, canvas.height*6/8, d); 
  circle(canvas.width*5/16, canvas.height*6/8, d); 
  circle(canvas.width*7/16, canvas.height*6/8, d);

  line(canvas.width*5/8, canvas.height*4/8 + d/2, canvas.width*9/16, canvas.height*6/8 -d/2);
  line(canvas.width*5/8, canvas.height*4/8 + d/2, canvas.width*11/16, canvas.height*6/8 -d/2);

  line(canvas.width*7/8, canvas.height*4/8 + d/2, canvas.width*13/16, canvas.height*6/8 -d/2);
  line(canvas.width*7/8, canvas.height*4/8 + d/2, canvas.width*15/16, canvas.height*6/8 -d/2);
  
  circle(canvas.width*9/16, canvas.height*6/8, d); 
  circle(canvas.width*11/16, canvas.height*6/8, d); 
  circle(canvas.width*13/16, canvas.height*6/8, d); 
  circle(canvas.width*15/16, canvas.height*6/8, d); 

}