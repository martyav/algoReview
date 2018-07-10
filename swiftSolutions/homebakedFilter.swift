// Extend an array to implement your own filter() method. 

extension Array {
    func myFilter<T>(_ closure: (T) -> Bool) -> [T] {
        var newArr = [T]()

        for item in self {
            let castAsT = item as! T
            if closure(castAsT) {
                newArr.append(castAsT)
            }
        }
    }
}
