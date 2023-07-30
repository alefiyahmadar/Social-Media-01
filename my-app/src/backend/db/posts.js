import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    id:0,
    content:
      "At Peace.",
    likes: {
      likeCount: 0,
      likedBy: ["shubhamsoni"  , "sohamshah"],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    follow:false,
    isLiked:false,
    isBookMarked:false,
    
    date:"12 May 2023",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Wonderful!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Gracias!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    id:1,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: ["sohamshah" ,"adarshbalika" ],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Shubham",
    lastName: "Soni",
    follow:false,
    date:"21/03/2023",
    isLiked:true,
    isBookMarked:false,

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    id:2,
    content:
      "Up and Above",
      isLiked:false,
      isBookMarked:false,
    likes: {
      likeCount: 0,
      likedBy: ["sohamshah"],
      dislikedBy: [],
    },
    username: "sohamshah",
    firstName: "Soham",
    lastName: "Shah",

    follow:false,
    date:"1/08/2023",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Cool!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "lets go!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),

  },
  
  {
    _id: uuid(),
    id:3,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores  repellat.",
      isLiked:false,
      isBookMarked:false,
    likes: {
      likeCount: 0,
      likedBy: ["sohamshah" ,"shubhamsoni" ],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    follow:false,
    date:"22/05/2023",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Good",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wowwziee!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    id:4,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id llat.",
      isLiked:true,
      isBookMarked:false,
    likes: {
      likeCount: 0,
      likedBy: ["sohamshah" , "adarshbalika" , "shubhamsoni"],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Shubham",
    lastName: "Soni",
    follow:false,
    date:"23/11/2023",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Nice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    id:5,
    content:
      "Had an amazing brunch at Holleys",
      isLiked:false,
      isBookMarked:false,
    likes: {
      likeCount: 0,
      likedBy: ["shubhamsoni"],
      dislikedBy: [],
    },
    username: "sohamshah",
    firstName: "Soham",
    lastName: "Shah",
    follow:false,
    date:"4/12/2023",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Yumm",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),

  },{

    _id: uuid(),
    id:6,
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
      isLiked:false,
      isBookMarked:false,
    likes: {
      likeCount: 0,
      likedBy: ["shubhamsoni"],
      dislikedBy: [],
    },
    username: "maryjane", 
    firstName: "Mary",
    lastName: "Jane",
    follow:false,
    date:"29/12/2023",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Yumm",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),

  },{
    _id: uuid(),
    id:7,
    content:
      "Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.",
      isLiked:false,
      isBookMarked:false,
    likes: {
      likeCount: 0,
      likedBy: ["shubhamsoni"],
      dislikedBy: [],
    },
    username: "maryjane",
    firstName: "Mary",
    lastName: "Jane",
    follow:false,
    date:"31/12/2023",
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "An emotion",
        votes: {
          upvotedBy: [],
          downvotedBy: [], },
        },{

          _id: uuid(),
          username: "sohamshah",
          
          text: "On my wayyy",
          votes: {
            upvotedBy: [],
            downvotedBy: [], },

        }
      ],
      createdAt: formatDate(),
      updatedAt: formatDate(),
  }
];

