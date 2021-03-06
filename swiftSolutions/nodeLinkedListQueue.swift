class Node<T> {
    var key: T?
    var next: Node<T>?
}

class LinkedList<T> {
    var head: Node<T>
    var tail: Node<T>
    
    init() {
        self.head = Node<T>()
        self.tail = head
    }
}

class Queue<T> {
    private var list = LinkedList<T>()

    func enQueue(newElement: T) {
        if list.head.key == nil {
            list.head.key = newElement

            return
        } else {
            let newNode = Node<T>()
            newNode.key = newElement
            list.tail.next = newNode
            list.tail = newNode
        }
    }

    func deQueue() -> T? {
        if let oldHeadKey = list.head.key {
            if let nextNode = list.head.next {
                list.head = nextNode
            } else {
                list.head.key = nil
            }

            return oldHeadKey
        } else {

            return nil
        }
    }

    func isEmpty() -> Bool {

        return list.head.key == nil
    }

    func peek() -> T? {

        return list.head.key
    }
}

func skipTheLine(queue: Queue<Any>, value: Any) -> Queue<Any> {
    var cutLine = Queue<Any>()

    if cutLine.isEmpty() {
        cutLine.enQueue(newElement: value)
    } else {
        while queue.peek != nil {
            cutLine.enQueue(newElement: queue.deQueue()!)
        }
    }

    return cutLine
}

func skipTheLineAlt(queue: Queue<Any>, value: Any) -> Queue<Any> {
    var holdThese = [Any]()
    
    holdThese.append(value)

    while !queue.isEmpty() {
        holdThese.append(queue.deQueue())
    }

    while !holdThese.isEmpty {
        queue.enQueue(newElement: holdThese.removeFirst())
    }
    
    return queue
}

