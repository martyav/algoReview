http://www.enekoalonso.com/projects/99-swift-problems/

class List<T> {
    var value: T!
    var nextItem: List<T>?
    
    convenience init!(_ values: T...) {
        self.init(Array(values))
    }
    
    init!(_ values: Array<T>) {
        if values.count == 0 {
            return nil
        }
        
        var tail = values
        let head = tail.removeFirst()
        
        self.value = head
        self.nextItem = List(tail)
    }
}

let testList = List(1, 4, 9, 16, 25, 36, 49)

extension List {
    var last: T? {
        if nextItem == nil {
            return value
        } else {
            return self.nextItem?.last
        }
    }
}

testList!.last
