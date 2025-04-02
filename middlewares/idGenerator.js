function generateId(arrInput) {
    let currentId;
    arrInput.forEach(item => currentId = item.id);
    return currentId
}

module.exports = generateId;


