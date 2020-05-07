class Node {
  constructor(value, left = null, right = null){
    this.left= left;
    this.right = right;
    this.value  = value;
  }
}

// O(log n) time complexity
class BinaryTree{
  constructor(root){
    this.root = root;
  }
  // pre order traversal;
  printAllNodes(/* start at root */ node = this.root) {
    // if no more nodes to print, return
    if(!node){
      // if tree is empty, print no nodes to print
      if(node === this.root){
        console.log("Print All Nodes: No nodes to print. empty tree");
      }
      return;
    }
    console.log(node);
    this.printAllNodes(node.left || null);
    this.printAllNodes(node.right || null);
  }

  // pre-order traversal; 
  checkIfSubset(subTreeNode, node = this.root, inTree = false){
      if(subTreeNode.value === node.value){
        //when node is matched
        if (!subTreeNode.left && !subTreeNode.right){
          //when no more subtree left or right, return because it is a match
          console.log("YES! Subtree IS a subset of this binary tree");
          return true;
        }      
        //when inside subtree but no match yet
        if(subTreeNode.right && node.right) {
          //go right if right exists in sub and root
          this.checkIfSubset(subTreeNode.right, node.right, true)
        }else if(subTreeNode.left && node.left){
          // go left if left exists in subtree and node
          this.checkIfSubset(subTreeNode.left, node.left, true);
        }else {
          //no match when comparing trees
          console.log("NO! Subtree IS NOT a subset of this binary tree.");
          return false;
        }
      }
      else{
        //when root isn't matched yet
        if(subTreeNode.value < root.value){
          //when subroot is smaller than mainroot, traverse left on root
          return root.left ? this.checkIfSubset(subTreeNode, root.left): false;
        } else {
          //when subroot is larger than mainroot, traverse right on root
          return root.right? this.checkIfSubset(subTreeNode, root.right): false
        }
      }
  }

  // pre-order traversal
  addNode(node, /* start at root */ root = this.root){
    // base case, return if nodevalue exists
    if(root.value === node.value){
      console.log(`Add node: value ${node.value} already exists in tree`);
      return;
    }
    // go left if new value is greater than node
    if(node.value < root.value){
      // if node has left node, continue.
      if(root.left){
        this.addNode(node, root.left);
      } 
      // if node doesn't have left node, add new node to left node and return
      else{
        console.log(`node value ${node.value} added to tree`);
        root.left = node;
        return;
      }
    } 
    // go right if new node value is greater than node
    else {
      // if node has a right node, continue
      if(root.right){
        this.addNode(node, root.right);
      } 
      // if node has no right node, add new node as right node and return
      else {
        console.log(`node value ${node.value} added to tree`);
        root.right = node;
        return;
      }
    } 
  }

  // pre order traversal
  printAllLeaves(/* start at root */ root = this.root) {
    // print node if leaf (no left or right nodes)
    if(!root.left && !root.right){
      console.log(root);
      return;
    }
    // if node has left, traverse left
    if(root.left){
      this.printAllLeaves(root.left);
    }
    // if node has right, traverse right
    if(root.right){
      this.printAllLeaves(root.right);
    }
    
  }

  // in order search
  inOrderSearch(searchValue, /* start at root */ root = this.root){
    let found = false;
    if(root){
      // traverse to left most node
      found = this.inOrderSearch(searchValue, root.left);
      // check for match
      if(found) {
        // return boolean only when it isn't the root
        if(root === this.root){
          return;
        }
        return true;
      }
      // print message and return true because we have a match!
      if(root.value === searchValue) {
        console.log(`In Order Search: search value ${searchValue} exists in tree`);
        return true;
      }
      // if no match found in left, go right
      found = this.inOrderSearch(searchValue, root.right);
      if(found) {
        // return boolean only when it isn't the root
        if(root === this.root){
          return;
        }return true;
      }
        // if still not found and we get to the greatest node value, then return false bc theres no more nodes to check
      if(!found && root.value === this.greatestValueNode().value) {
        console.log(`In Order Search: search value ${searchValue} not found`);
        return false;
      }
    }
    return;

  }

  // pre order traversal
  preOrderSearch(searchValue, /* start at root */ root = this.root) {
    // track if not found to display not found message;
    let found = false;
    // check root value for match
    if (root) {
      // if match is found return true
      if(root.value === searchValue) {
        console.log(`Pre-Order Search: search value ${searchValue} exists in tree`);
        return true;
      } 
      // continue search starting from left, then right
      else {
        found = this.preOrderSearch(searchValue, root.left) || false;
        if (!found) this.preOrderSearch(searchValue, root.right)
        else return true;
      }
    }
    // when value gets to the tree root's right node (last to be checked) and not found, display not found message
    if(!found &&root && root.value === this.root.right.value){
      console.log(`Pre-Order Search: search value ${searchValue} not found`);
      return false;
    }
  } 

  greatestValueNode(/* start at root */ root = this.root){
    // if the node doesn't have right, return because node is the greatest value in tree
    if(root && !root.right){
      return root;
    }
    return this.greatestValueNode(root.right);
  }
}


/* Here's a random binary tree in case you didn't want to go thru the hassle of creating one */
const root = new Node(18);
let binaryTree = new BinaryTree(root);
binaryTree.addNode(new Node(2));
binaryTree.addNode(new Node(3));
binaryTree.addNode(new Node(12));
binaryTree.addNode(new Node(54));
binaryTree.addNode(new Node(45));
binaryTree.addNode(new Node(24));
binaryTree.addNode(new Node(265));
binaryTree.inOrderSearch(24);
binaryTree.inOrderSearch(1);