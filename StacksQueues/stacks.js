class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let pushedNode = new Node(val);
        if (!this.first) {
            this.first = pushedNode;
            this.last = pushedNode;
        }
        else {
            pushedNode.next = this.first;
            this.first = pushedNode;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        else if (this.size == 1) this.last = null;

        let poppedNode = this.first;
        this.first = poppedNode.next;
        poppedNode.next = null;
        this.size--;
        return poppedNode.val;
    }
}

const stacks = new Stack();
stacks.push(1);
stacks.push(2);
stacks.push(3);
console.log(stacks);
stacks.pop();
console.log(stacks);