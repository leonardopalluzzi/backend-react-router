function merge(arr1, arr2) {
    const mergedArr = []
    arr1.forEach((item, i) => {
        const newPost = { ...item, comments: arr2[i].comments };
        mergedArr.push(newPost)
    })
    return mergedArr
}

module.exports = merge;