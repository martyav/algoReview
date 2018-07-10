extension String {
    var length: Int {
        get {
            return self.characters.count
        }
    }
    
    var array: [String] {
        get {
            return self.characters.map { String($0) }
        }
    }
}
