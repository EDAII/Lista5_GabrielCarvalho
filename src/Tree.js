class Tree{
    constructor(){
      this.root = null;
    }
    insert(value){

      if(!this.root){
          this.root = new Node(value);
          return;
      }

      let node = new Node(value); 
      let currentNode = this.root;  

      while(currentNode){
        if(value < currentNode.data){
            if(!currentNode.left){
                currentNode.left = node;
                break;
            }
            else{
                currentNode = currentNode.left;
            }
        }else{
            if(!currentNode.right){
                currentNode.right = node;
                break; 
            }else{
                currentNode = currentNode.right;
            }
        }
      }
    }
    inorder(node){
        if(node){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    draw(node){
        console.log(node.data);
        if(node.left){ this.draw(node.left)};
        if(node.right){ this.draw(node.right)};
    }
    remove(data){
      
    }
  }
  
  class Node{
    constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }