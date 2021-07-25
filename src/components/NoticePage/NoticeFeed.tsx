import React, { useState } from "react";
import Comment from "./Comment";
interface INotice {
  date: string;
  author: string;
  notice: string;
}

interface IComment {
  date: string;
  writer: string;
  comment: string;
}
const NoticeFeed = ({ date, author, notice }: INotice) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const handleCommentField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newComment: IComment = {
      date: new Date().toDateString(),
      writer: "",
      comment: e.target.value,
    };
    setComments([...comments, newComment]);
  };
  return (
    <div className="py-5 px-5 m-2 rounded-md border-4 border-blue-600">
      <div className="py-5 px-5 m-2 rounded-md border-4 border-green-600">
        <h4>{author}</h4>
        <i>{date}</i>
        <p className="my-5">{notice}</p>
      </div>
      <div>
          {comments.map((com) => (
            <Comment
              key={com.comment}
              date={com.date}
              writer={com.writer}
              comment={com.comment}
            ></Comment>
          ))}
        </div>
      <div className="grid grid-flow-row grid-cols-6 grid-rows-1 gap-2">
        <div className="col-span-5 rounded-md border-2 border-green-500">
          <input
            type="text"
            className=" w-full h-full p-2"
            placeholder="Write comment"
            onBlur={(e) => handleCommentField(e)}
          />
        </div>
        
        <div className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
          {" "}
          <button>Go</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default NoticeFeed;
