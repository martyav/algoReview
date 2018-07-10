unc recursiveZip(zig: [Int], zag: [Int], takeFromZig: Bool = true, finalArr: [Int] = []) -> [Int] {

    if zig.isEmpty && !zag.isEmpty {

        return finalArr + zag
    }

    if !zig.isEmpty && zag.isEmpty {

        return finalArr + zig
    }

    guard !zig.isEmpty && !zag.isEmpty else {

        return finalArr
    }

    var newArr = finalArr
    var newZig = zig
    var newZag = zag

    if takeFromZig {

        newArr.append(newZig.removeFirst())
    } else {

        newArr.append(newZag.removeFirst())
    }
    
    return recursiveZip(zig: newZig, zag: newZag, takeFromZig: !takeFromZig, finalArr: newArr)

}

recursiveZip(zig: [100,500,1000], zag: [6,7,8,9,10])
