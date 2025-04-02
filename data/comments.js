const posts = require('./posts.js')

const commentsArr = [
    {
        id: 1,
        comments: [
            {
                username: "JohnDoe",
                userImage: "https://picsum.photos/50/50",
                content: "Great post!",
                likes: 3
            },
            {
                username: "JaneSmith",
                userImage: "https://picsum.photos/51/50",
                content: "Very helpful",
                likes: 5
            }
        ],
        likes: 10
    },
    {
        id: 2,
        comments: [
            {
                username: "Alice",
                userImage: "https://picsum.photos/52/50",
                content: "Nice explanation",
                likes: 2
            }
        ],
        likes: 5
    },
    {
        id: 3,
        comments: [
            {
                username: "Bob",
                userImage: "https://picsum.photos/53/50",
                content: "Good read",
                likes: 4
            }
        ],
        likes: 8
    },
    {
        id: 4,
        comments: [
            {
                username: "Charlie",
                userImage: "https://picsum.photos/54/50",
                content: "Very informative",
                likes: 6
            }
        ],
        likes: 7
    },
    {
        id: 5,
        comments: [
            {
                username: "Dave",
                userImage: "https://picsum.photos/55/50",
                content: "Helpful guide",
                likes: 8
            }
        ],
        likes: 12
    },
    {
        id: 6,
        comments: [

        ],
        likes: 9
    },
    {
        id: 7,
        comments: [
            {
                username: "Frank",
                userImage: "https://picsum.photos/57/50",
                content: "Useful tips",
                likes: 5
            }
        ],
        likes: 6
    },
    {
        id: 8,
        comments: [
            {
                username: "Grace",
                userImage: "https://picsum.photos/58/50",
                content: "Good tutorial",
                likes: 3
            }
        ],
        likes: 4
    },
    {
        id: 9,
        comments: [
            {
                username: "Hank",
                userImage: "https://picsum.photos/59/50",
                content: "Very useful",
                likes: 6
            }
        ],
        likes: 11
    },
    {
        id: 10,
        comments: [
            {
                username: "Ivy",
                userImage: "https://picsum.photos/60/50",
                content: "Great guide",
                likes: 8
            }
        ],
        likes: 13
    }
];

module.exports = commentsArr;