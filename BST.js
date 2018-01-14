function BinarySearchTree(value) {
	// body...
	this.value = value;
	this.right = null;
	this.left = null;
}


BinarySearchTree.prototype.insert = function(value) {
	// body...
	if(value<this.value){
		if (!this.left) {
			this.left=new BinarySearchTree(value);
			
		}
		if(this.left){
			this.left.insert(value);
		    }
	}
		if (value>this.value) {
			if (!this.right) {
				this.right = new BinarySearchTree(value);
				
			}
			if (this.right) {
					this.right.insert(value) ;
				}
		}
};

BinarySearchTree.prototype.contain = function(value) {
	// body...
	if (this.value === value) {
		return true;
	}
	if (this.value>value) {
		if(!this.left) return false;
		else return this.left.contain(value)
	}
	if (this.value<value) {
		if (!this.right) return false;
		else return this.right.contain(value);
	}
};
BinarySearchTree.prototype.maxVal = function() {
	// body...
	if (!this.right) {
		return this.value
	}
	else{
		return this.right.maxVal();
	}

};
BinarySearchTree.prototype.minVal = function() {
	// body...
	if (!this.left) {
		return this.value;
	}
	else{
		return this.left.minVal();
	}
};

// Depth 
//breath

