import React from 'react';
interface IComment {
    date: string;
    writer: string;
    comment: string;
  }
const Comment = ({ date, writer, comment}:IComment) => {
    return (
        <div>
            <p>{writer}  {date}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Comment;