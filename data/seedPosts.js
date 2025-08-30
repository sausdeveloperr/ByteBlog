const seedPosts = [
  {
    id: 0,
    title: "The Art of Minimalist Design in Digital Products",
    subHead: "Explore how less can truly be more when crafting user experiences that resonate with modern audiences.",
    author: "Sarah Chen",
    authorImg: "images/authors/Sarah Chen.jpg",
    featured: true,
    tags: [],
    readTime: "5 min read",
    postDate: "Dec 15, 2024",
    banner: "images/articles/Canva Art of Minimalist Design.png",
    content: "",
    likeCount: 0,
    comments: [
        {
            id: 0, //use date.now() hash
            author: "",
            content: "",
            upvote: 0
        },
        {
            id: 1, //use date.now() hash
            author: "",
            content: "",
            upvote: 0
        }
        // and so on 
    ],
    shareCount: 0
  },
  // and so on 
]

export default seedPosts;