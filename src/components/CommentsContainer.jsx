import React from "react";
const commentsData = [
  {
    name: "Trisha Joshi",
    text: "Lorem iosum heyy here",
    replies: [
      {
        name: "Trisha Joshi",
        text: "Lorem iosum heyy here",
        replies: [
          {
            name: "Trisha Joshi",
            text: "Lorem iosum heyy here",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Trisha Joshi",
    text: "Lorem iosum heyy here",
    replies: [
      {
        name: "Trisha Joshi",
        text: "Lorem iosum heyy here",
        replies: [],
      },
    ],
  },
 
  {
    name: "Trisha Joshi",
    text: "Lorem iosum heyy here",
    replies: [
      {
        name: "Trisha Joshi",
        text: "Lorem iosum heyy here",
        replies: [],
      },
    ],
  },
 
 
  {
    name: "Trisha Joshi",
    text: "Lorem iosum heyy here",
    replies: [
      {
        name: "Trisha Joshi",
        text: "Lorem iosum heyy here",
        replies: [],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="shadow-sm flex bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="h-12 w-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (

    <div>
    <Comment key={index} data={comment} />
    <div className="pl-5 border border-l-black ml-5">
    <CommentList comments={comment.replies}/>
  </div></div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
