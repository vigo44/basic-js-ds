const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.three = null;
  }
  
  root() {
    return this.three;
  }
  
  add(data) {
    this.three = addData(this.three, data);
  
    function addData(branch, value) {
      if (!branch) {
        branch = new Node (value);
        return branch;
      }
      
      
      if (branch.data === value){
        return branch;
      }
      
      if (value < branch.data){
        branch.left = addData (branch.left, value);
        return branch;
  
      }
  
      if (value > branch.data){
        branch.right = addData (branch.right, value);
        return branch;
      }
    }
  
  }
  
  has(data) {
    return hasData(this.three, data)
  
    function hasData(branch, value){
      if (!branch) {
        return false;
      }
      if (branch.data === value){
        return true;
      }
      if (value < branch.data){
        
        return hasData(branch.left, value);  
      }
  
      if (value > branch.data){
        
        return hasData(branch.right, value);  
      }
    }
  
  
  }
  
  find(data) {
    return findData (this.three, data);
  
    function findData (branch, value){
      if (!branch) {
        return null;
      }
      if (branch.data === value){
        return branch;
      }
      if (value < branch.data){
        
        return findData(branch.left, value);  
      }
  
      if (value > branch.data){
        
        return findData(branch.right, value);  
      }
    };
    
  }
  
  remove(data) {
    this.three = removeData(this.three, data)
    
    
     
  
    function removeData(branch, value){
      if (!branch) {
        return null;
      }
      if (branch.data === value) {
                
  
        if ((branch.left === null) && (branch.right === null) ){
          return null;
        }
  
        if ((branch.left === null)){
          return branch.right;
        }
        if ((branch.right === null)){
          return branch.left;
      }
    
        let minRight = findMin(branch.right);
        branch.data = minRight.data;
        branch.right = removeData (branch.right, minRight.data)
        return branch;
     }  
     if (value < branch.data){
       branch.left = removeData(branch.left, value);  
      return branch; 
  
    }
  
    if (value > branch.data){
      branch.right = removeData(branch.right, value);  
      return branch; 
    }
  
    }
  
    function findMin(branch) {
        if (branch.left === null) {
          return branch
        };
        return findMin(branch.left);
      
    }
  
    
  }
  
  
  min() {
    function findMin(branch) {
      if (!branch) {
        return null;
      }
        if (branch.left === null) {
          return branch
        };
        return findMin(branch.left);    
   
  }
   return findMin (this.three).data; 
  }
  
  max() {
    function findMax(branch) {
      if (!branch) {
        return null;
      }
        if (branch.right === null) {
          return branch
        };
        return findMax(branch.right);    
   
  }
   return findMax (this.three).data; 
  }
  }

module.exports = {
  BinarySearchTree
};