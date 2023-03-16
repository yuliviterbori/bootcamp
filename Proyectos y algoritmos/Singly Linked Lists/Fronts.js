class Node {
    constructor(value, next=null) {
        this.val = value;
        this.next = next;
    }
}

class SSL {
    constructor() {
        this.head = null;
    }


    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    // agregar frente
    addFront(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }
    //quitar frente
    removeFront() {
        if (!this.head) {
            console.log("Empty List - nothing to remove")
            return null;
        } else {
            this.head = this.head.next;
        }
        return this.head;
    }

}