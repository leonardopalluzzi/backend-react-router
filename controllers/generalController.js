const postsData = require('../data/posts.js')
const commentsData = require('../data/comments.js')
const merge = require('../middlewares/merge.js')

function index(req, res) {
    console.log(postsData);

    const data = merge(postsData, commentsData)
    res.json(data)

}

function show(req, res) {
    console.log('show');

}

function store(req, res) {
    console.log('store');

}

function update(req, res) {
    console.log('update');

}

function patch(req, res) {
    console.log('patch');

}

function destroy(req, res) {
    console.log('destroy');

}


module.exports = {
    index,
    show,
    store,
    update,
    patch,
    destroy
}