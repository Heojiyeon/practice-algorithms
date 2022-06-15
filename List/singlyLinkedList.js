class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;

        }
        else {
            console.log("before", this.tail);
            this.tail.next = node;
            this.tail = node;
            console.log("after", this.tail);
        }
        this.length++;
        return this;
    }
}


let lists = new SinglyLinkedList();
console.log("before", lists);
lists.push(10);
console.log("after first", lists);
lists.push(23);
console.log("after second", lists);