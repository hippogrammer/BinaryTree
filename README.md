# Binary Tree 
  This is my implementation for Binary Tree class. Feel free to leave comments/ suggestions on where I can improve.
## Class Methods
* **constructor(): _void_** - initializes class members with params passed in.
* **printAllNodes(): _void_** - prints all nodes in tree using **pre-order traversal**
* **checkIfSubset(subtree: Node): _boolean_** - compares a subtree to this tree, assuming that the subtree is a subset and is smaller than this tree. Takes the root node of the subtree as an argument. Uses **pre-order traversal** to compare.
* **addNode(node: Node): _boolean_** - traverses the node using **pre-order traversal** and finds a spot for the new node. Returns true if added, false if the node value already exists in tree.
* **printAllLeaves(): _void_** - prints all the leaves (nodes with no left or right nodes) of the tree. 
* **preOrderSearch(searchValue: number): _boolean_** - recursively searches the tree using **pre-order traversal**. Takes a number as argument.
* **inOrderSearch(searchValue: number): _boolean_** - recursively searches the tree using **in-order traversal**. Takes a number as argument.
* **postOrderSearch(searchValue: number): _boolean_** - recursively searches the tree using **post-order traversal**. Takes a number as argument.
* **getGreatestValueNode(): _Node_** - returns the node with the greatest value in tree. Traverses to the right of tree and returns node when it doesn't have a right node.
* **Todo**: getSmallestValueNode(): _Node_ - returns the node with smallest value in tree. Traverse to the left of tree and return node when it doesn't have a left value.
* **Todo**: isBalanced(): _boolean_ - checks to see if the tree is balanced. Checks for left and right depths and returns a boolean.  
* **Todo**: balanceTree(): _void_ - balances tree. **Implementation not thought out yet**
* **Todo**: breadthFirstSearch(): _boolean_ - searches the tree using **breadth-first traversal**. _Implementation not thought out yet_, probably will implement array or linked list.
* **Todo**: depthFirstSearch(): _void_ - searches the tree using **depth-first traversal**. _Implementation not thought out yet_

