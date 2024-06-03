class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = null;
        this.size = 0;
    }

    add(value){
        const newNode = new Node(value);
    
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(value){
        if (!this.head) return null;
        if (this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while(current.next && current.next.value !== value){
            current = current.next;
        }
        if (current.next){
            current.next = current.next.next;
            this.size--;
        }
    }

    print(){
        let current = this.head;
        console.log('Start of list');
        while(current){
            console.log(current.value);
            current = current.next;
        }
        console.log('End of list');
    }
}

module.exports = LinkedList;
