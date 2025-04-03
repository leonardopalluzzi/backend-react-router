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
    const currentPost = commentsData.find(item => item.id == currentId)

    //find highest id
    let nextId = 0;

    if (currentPost.comments.length > 0) {
        for (let i = 0; i < currentPost.comments.length; i++) {
            const currentId = currentPost.comments[i].commId
            console.log(currentId);
            if (currentId > nextId) {
                nextId = currentId
            }
        }
    } else {
        nextId = 0
    }



    console.log(nextId);


    //vreate new comment
    const newComment = {
        commId: nextId + 1,
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
    const currentPostId = Number(req.params.id); //id params to retrive comment list from post id
    const currentCommentId = Number(req.query.id) //qury string to retrive wanted comment id

    console.log(currentCommentId);

    const currentPost = commentsData.find(item => item.id == currentPostId);
    console.log(currentPost);

    let currentComment = currentPost.comments.find(item => item.commId == currentCommentId)
    console.log(currentComment);


    if (!currentComment) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post not found'
        })
    } else {
        currentComment.username = req.body.username;
        currentComment.userImage = req.body.userImage;
        currentComment.content = req.body.content;
    }

    const data = merge(postsData, commentsData)

    res.json(commentsData)

}

function modify(req, res) {
    const currentPostId = Number(req.params.id); //id params to retrive comment list from post id
    const currentCommentId = Number(req.query.id) //qury string to retrive wanted comment id

    console.log(currentCommentId);

    const currentPost = commentsData.find(item => item.id == currentPostId);
    console.log(currentPost);

    let currentComment = currentPost.comments.find(item => item.commId == currentCommentId)
    console.log(currentComment);


    if (!currentComment) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post not found'
        })
    } else {
        currentComment.username = req.body.username;
        currentComment.userImage = req.body.userImage;
        currentComment.content = req.body.content;
    }

    const data = merge(postsData, commentsData)

    res.json(commentsData)

}

function destroy(req, res) {
    //recupero id corrente
    const currentId = Number(req.params.id)
    const currentCommentId = req.query.id

    const currentPost = commentsData.find(item => item.id == currentId)
    const currentComment = currentPost.comments.find(item => item.commId == currentCommentId)

    //elimino dagli array post e commenti con id corrente
    if (!currentComment) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post Not Found'
        })
    } else {
        currentPost.comments.splice(currentPost.comments.indexOf(currentComment), 1)
    }

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