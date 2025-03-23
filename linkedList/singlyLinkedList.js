// Create the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create the linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0  // Keeps track of the number of the nodes
    }

    print() {
        // Prints all nodes
        let current = this.head;
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}