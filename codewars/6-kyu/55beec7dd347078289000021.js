// Solution for the 55beec7dd347078289000021 problem at CodeWars: Linked Lists - Length & Count (6 kyu)

function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    if(head === null){
        return 0
    }

    let length = 0

    while(head !== null){
        length++
        head = head.next
    }

    return length
}

function count(head, data) {
    if(head === null){
        return 0
    }

    let count = 0

    while(head !== null){
        if(head.data === data){
            count++
        }
        head = head.next
    }

    return count
}