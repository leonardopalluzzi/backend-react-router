const postsData = require('../data/posts.js')
const commentsData = require('../data/comments.js')
const merge = require('../middlewares/merge.js')

const data = merge(postsData, commentsData)

function index(req, res) {

    res.json(commentsData)

}

function show(req, res) {
    console.log('show');
    const currentId = Number(req.params.id);
    console.log(currentId);

    const currentComment = commentsData.find(item => item.id === currentId);

    if (!currentComment) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post not found'
        })
    }

    res.json(currentComment)
}

function store(req, res) {
    const currentId = Number(req.params.id)

    //find the post on whic you have o add the comment to
    let currentPost = commentsData.find(item => item.id == currentId)

    //vreate new comment
    const newComment = {
        username: req.body.username,
        userImage: req.body.userImage,
        content: req.body.content,
        likes: 0
    }

    //push comment in comments array
    currentPost.comments = [

        ...currentPost.comments,
        newComment
    ]

    const data = merge(postsData, commentsData)

    //send res
    res.status(201).json(data)

}

function update(req, res) {
    const currentId = Number(req.params.id);

    const currentPost = postsData.find(item => item.id == currentId);
    const currentComment = commentsData.find(item => item.id == currentId)

    if (!currentPost) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post not found'
        })
    } else {
        currentPost.title = req.body.title;
        currentPost.content = req.body.content;
        currentPost.image = req.body.image;
        currentComment.comments = req.body.comments;
    }

    const data = merge(postsData, commentsData)

    res.json(data)

}

function modify(req, res) {
    const currentId = Number(req.params.id);

    const currentPost = postsData.find(item => item.id == currentId);

    if (!currentPost) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post not found'
        })
    } else {
        currentPost.title = req.body.title;
        currentPost.content = req.body.content;
        currentPost.image = req.body.image;
    }

    const data = merge(postsData, commentsData)

    res.json(data)

}

function destroy(req, res) {
    console.log('destroy');
    //recupero id corrente
    const currentId = Number(req.params.id)

    const currentPost = postsData.find(item => item.id == currentId)
    const currentComment = commentsData.find(item => item.id == currentId)

    //elimino dagli array post e commenti con id corrente
    postsData.splice(postsData.indexOf(currentPost), 1)
    commentsData.splice(commentsData.indexOf(currentComment), 1)

    //merge array
    const data = merge(postsData, commentsData)

    //send data
    res.status(201).json(data)

}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}