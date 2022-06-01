"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
   Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro 
  del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  if(this.right === null && this.left === null){
    return 1;
  }
  if(this.right === null && this.left !== null){
    return 1 + this.left.size();
  }
  if(this.right !== null && this.left === null){
    return 1 + this.right.size();
  }
  if(this.right !== null && this.left !== null){
    return 1 + this.right.size () + this.left.size();
  }
}

BinarySearchTree.prototype.insert = function (value){
  if(this.value > value){
    if(this.left !== null){
      this.left.insert(value);
    }
    else{
      this.left = new BinarySearchTree(value);
    }
  }

  if(this.value < value){
    if(this.right !== null){
      this.right.insert(value);
    }
    else {
      this.right = new BinarySearchTree(value);
    }
  }
}


BinarySearchTree.prototype.contains = function (value){
  if(this.value === value){ // si esta en el root retorno true, es el primer elemento del tree
    return true;
  }
  if(this.value > value){
   if(this.left !== null){
     return this.left.contains(value);
   }
   else {
     return false;
   }
  }

  if(this.value < value){
    if(this.right !== null){
      return this.right.contains(value);
    }
    else {
      return false;
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
 // "post-order", "pre-order", o "in-order"
  switch(order){
    case "post-order": // izq - dere - root
      if(this.left !== null){
        this.left.depthFirstForEach(cb, order);
      }
      if(this.right !== null){
        this.right.depthFirstForEach(cb, order);
      }
      cb(this.value);
      break;

    case "pre-order":
      cb(this.value);
      if(this.left !== null){
        this.left.depthFirstForEach(cb, order);
      }
      if(this.right !== null){
        this.right.depthFirstForEach(cb, order);
      }
      break;

    default:  // "in-order"
      if(this.left !== null){
        this.left.depthFirstForEach(cb, order);
      }
      cb(this.value);
      if(this.right !== null){
        this.right.depthFirstForEach(cb, order);
      }
      break;
  }

}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []){ // por niveles
  
  cb(this.value);

  if(this.left !== null){
    array.push(this.left);
  }

  if(this.right !== null){
    array.push(this.right);
  }

  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
