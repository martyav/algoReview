// iterate over the array in reverse order and print the elements separated by space

for index in 0..<arr.count {
    print(arr[arr.count - index - 1], terminator: " ")
}
