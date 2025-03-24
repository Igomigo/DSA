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
        // Inserts a new node at the head
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;  // Increment the node count
    }

    insertAtTail(data) {
        // Inserts a new node at the tail
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insertAt(data, index) {
        // Insert at a specific position(index)
        if (index < 0 || index > this.size) return;

        // Check if the head is the position
        if (index === 0) {
            this.insertAtHead(data);
            return;
        }

        // Initialize the placeholders
        let newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;

        // Loop through to the index position
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        // Update the list
        newNode.next = current;
        previous.next = newNode;
    }
}

// Example Usage:
const list = new LinkedList();
list.insertAtHead(5);
list.insertAtHead(10);
list.print();
list.insertAtTail(15);
list.insertAtTail(20);
list.print();
list.insertAt(14, 2);
list.print();
