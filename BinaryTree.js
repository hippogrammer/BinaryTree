class Node {
  constructor(value, left = null, right = null){
    this.left= left;
    this.right = right;
    this.value  = value;
  }
}

class BinaryTree{
  
  constructor(root){
    this.root = root;
  }

  printAllNodes(root = this.root) {
    if(!root){
      return;
    }
    console.log(root);
    this.printAllNodes(root.left || null);
    this.printAllNodes(root.right || null);
  }

  checkIfSubset(subTreeNode, root = this.root, inTree = false){
      if(subTreeNode.value === root.value){
        //when root is matched
        if (!subTreeNode.left && !subTreeNode.right){
          //when no more subtree left or right, return because it is a match
          return true;
        }      
        //when inside subtree but no match yet
        if(subTreeNode.right && root.right) {
          //go right if right exists in sub and root
          this.checkIfSubset(subTreeNode.right, root.right, true)
        }else if(subTreeNode.left && root.left){
          // go left if left exists in sub and root
          this.checkIfSubset(subTreeNode.left, root.left, true);
        }else {
          //no match when comparing trees
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

  addNode(node, root = this.root){
    if(root.value === node.value){
      console.log("node value "+node.value+" added to tree");
      return;
    }
    if(node.value < root.value){
      if(root.left){
        this.addNode(node, root.left);
      } else{
        root.left = node;
      }
    } else {
      if(root.right){
        this.addNode(node, root.right);
      } else {
        root.right = node;
      }
    } 
  }

  printAllLeaves(root = this.root) {
    if(!root.left && !root.right){
      console.log(root);
      return;
    }
    if(root.left){
      this.printAllLeaves(root.left);
    }
    if(root.right){
      this.printAllLeaves(root.right);
    }
    
  }
}

const root = new Node(18);
let binaryTree = new BinaryTree(root);
console.log(binaryTree.root.value);
binaryTree.addNode(new Node(2));
binaryTree.addNode(new Node(3));
binaryTree.addNode(new Node(12));
binaryTree.addNode(new Node(54));
binaryTree.addNode(new Node(45));
binaryTree.addNode(new Node(24));
binaryTree.addNode(new Node(265))
binaryTree.printAllNodes();
let sub = new BinaryTree(new Node(45, new Node(24)));
binaryTree.checkIfSubset(sub.root);
let sub2 = new BinaryTree(new Node(12));
binaryTree.checkIfSubset(sub2.root);
let sub3 = new BinaryTree(new Node(2, new Node(1), new Node(3, new Node(12))));
binaryTree.checkIfSubset(sub3.root);
let sub4 = new BinaryTree(binaryTree.root);
binaryTree.checkIfSubset(sub4.root);
sub4.addNode(new Node(5));
sub4.printAllNodes();
binaryTree.checkIfSubset(sub4.root);
binaryTree.printAllLeaves();


