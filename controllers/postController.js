const postsData = require('../data/posts.js')
const commentsData = require('../data/comments.js')
const merge = require('../middlewares/merge.js')



function index(req, res) {

    const data = merge(postsData, commentsData)

    res.json(data)

}

function show(req, res) {
    console.log('show');
    const currentId = Number(req.params.id);
    console.log(currentId);

    const currentPost = data.find(item => item.id === currentId);
    console.log(currentPost);


    if (!currentPost) {
        res.status(404).json({
            error: '404 Not Found',
            message: 'Post not found'
        })
    }
    console.log(`post corrente: ${currentPost}`);

    res.json(currentPost)
}

function store(req, res) {
    let nextId;

    //cacl obj id
    for (let i = 0; i < data.length; i++) {
        const currentId = data[i].id;
        for (let j = 1; j < data.length; j++) {
            const confId = data[j].id;
            if (currentId > confId) {
                nextId = currentId;
                break;
            }
        }
    }

    const newPost = {
        id: nextId + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        likes: 0


    }

    //create comment element with the same id
    const newComment = {
        id: nextId + 1,
        comments: [
            {
                username: "",
                userImage: "",
                content: "",
                likes: 0
            }
        ]
    }

    //push comment in comments array
    commentsData.push(newComment);

    //push obj into posts array
    postsData.push(newPost)

    console.log(data);


    //send res
    res.status(201).json(newPost, newComment)

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