class Node<T> {
    var key: T!
    var next: Node?
}

class LinkedList<T: Equatable> {
    var head  = Node<T>()
}

func sameHeadAndTail<T: Equatable>(list: LinkedList<T>) -> Bool {
    let checkMe = list.head
    var current = checkMe

    guard checkMe.next != nil else { return true }

    while current.next != nil {
        current = current.next!
    }

    return checkMe.key == current.key
}

var myList2 = LinkedList<String>()
myList2.head.key = "3"
myList2.head.next = Node()
myList2.head.next?.key = "20"
myList2.head.next?.next = Node()
myList2.head.next?.next?.key = "3"

sameHeadAndTail(list: myList2)
