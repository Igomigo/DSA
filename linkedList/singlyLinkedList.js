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
}

// Example Usage:
const list = new LinkedList();
list.insertAtHead(5);
list.insertAtHead(10);
list.print();
list.insertAtTail(15);
list.insertAtTail(20);
list.print();
