class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const insertNode = new Node(value);

        if (!this.root) {
            this.root = insertNode;
            return this;
        }
        else {
            let curr = this.root;
            while (true) {
                if (value == curr.value) return undefined;
                if (value < curr.value) {
                    if (!curr.left) {
                        curr.left = insertNode;
                        return this;
                    }
                    curr = curr.left;
                }
                else {
                    if (!curr.right) {
                        curr.right = insertNode;
                        return this;
                    }
                    curr = curr.right;
                }
            }
        }
    }
    find(value) {
        if (!this.root) return false;
        let curr = this.root, found = false;

        while (curr && !found) {
            if (curr.value > value) {
                curr = curr.left;
            }
            else if (curr.value < value) {
                curr = curr.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(5);
tree.insert(15);
console.log(tree);
console.log(tree.find(5));