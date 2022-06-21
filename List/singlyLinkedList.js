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
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let tmp = this.head;
        let pre = tmp;

        while (tmp.next) {
            pre = tmp;
            tmp = tmp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return tmp;
    }

    shift() {
        if (!this.head) return undefined;
        let tmp = this.head;
        this.head = tmp.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return tmp;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx >= this.length || idx < 0) return null;
        let count = 0;
        let curr = this.head;
        while (count != idx) {
            curr = curr.next;
            count++;
        }
        return curr;
    }

    set(idx, val) {
        let target = this.get(idx);
        if (target) {
            target.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx == this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);

        let node = new Node(val);
        let tmp = this.get(idx - 1);
        let nxt = tmp.next;
        tmp.next = node;
        node.next = nxt;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx == this.length - 1) return this.pop();
        let tmp = this.get(idx - 1);
        let target = tmp.next;
        tmp.next = target.next;
        this.length--;
        return target;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


let lists = new SinglyLinkedList();
lists.push(10);
lists.push(23);
lists.push(5);
lists.push(96);
console.log(lists); //10-23-5-96
lists.reverse();
console.log(lists); //96-5-23-10
// lists.print();