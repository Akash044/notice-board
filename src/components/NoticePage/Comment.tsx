import React from 'react';
interface IComment {
    date: string;
    writer: string;
    comment: string;
  }
const Comment = ({ date, writer, comment}:IComment) => {
    return (
        <div className="border-2 border-blue-700 rounded-md m-2 p-2">
            <p>{writer}  <i>{date}</i></p>
            <p>{comment}</p>
        </div>
    );
};

export default Comment;