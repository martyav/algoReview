# See https://github.com/martyav/algoReview/blob/master/swiftSolutions/alternatingArrays

def alternate(array1, array2)
    alternated = []
    length = array1.count + array2.count
    shorter = []
    longer = []

    if array1.count < array2.count
        shorter = array1
        longer = array2
    elsif array2.count <= array1.count
        shorter = array2
        longer = array1
    end

    (0..shorter.count).each do |index|
        alternated << shorter[index]
        alternated << longer[index]
    end

    if alternated.count < length
        newStartingIndex = shorter.count
        alternated << longer.slice(newStartingIndex, (longer.count - shorter.count))
    end

    return alternated
end

puts alternate([1,3,5,7,9], [2,4,6,8,10,12])
