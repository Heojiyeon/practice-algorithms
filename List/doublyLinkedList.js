class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) return undefined;
        let shiftedNode = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let count, tmp;
        if (idx > Math.floor(this.length / 2)) {
            count = this.length - 1;
            tmp = this.tail;
            while (count > idx) {
                tmp = tmp.prev;
                count--;
            }
        } else {
            count = 0;
            tmp = this.head;
            while (count < idx) {
                tmp = tmp.next;
                count++;
            }
        }
        return tmp;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) return false;
        else {
            foundNode.val = val;
            return true;
        }
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        else if (index == 0) this.unshift(val);
        else if (index == this.length) this.push(val);
        else {
            let insertedNode = new Node(val);
            let foundedNode = this.get(index - 1);
            insertedNode.next = foundedNode;
            insertedNode.prev = insertedNode.prev;
            foundedNode.prev.next = insertedNode;
            foundedNode.prev = insertedNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        else if (index == 0) this.shift();
        else if (index == this.length - 1) this.pop();
        else {
            let removedNode = this.get(index - 1);
            let after = removedNode.next;
            let before = removedNode.prev;
            after.prev = before;
            before.next = after;
            removedNode.prev = null;
            removedNode.next = null;
            this.length--;
        }
        return removedNode;
    }
}

let lists = new DoublyLinkedList();
lists.push(1);
lists.push(2);
lists.push(3);
console.log(lists);
lists.remove(2);
console.log(lists);
