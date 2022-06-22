class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let enqueueNode = new Node(val);
        if (!this.first) {
            this.first = enqueueNode;
            this.last = enqueueNode;
        }
        else {
            this.last.next = enqueueNode;
            this.last = enqueueNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        else {
            let dequeueNode = this.first;
            if (this.size == 1) {
                this.last = null;
            }
            this.first = dequeueNode.next;
            dequeueNode.next = null;
            this.size--;
            return dequeueNode.val;
        }
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);