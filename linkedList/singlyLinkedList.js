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
        console.log("Nodes:");
        while(current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;  // Increment the node count
    }
}

// Example Usage:
const list = new LinkedList();
list.insertAtHead(5);
list.print()
list.insertAtHead(10);
list.print()
console.log("List size:", list.size);
