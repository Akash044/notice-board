import React, { useState } from "react";
import NoticeFeed from "./NoticeFeed";
interface INotice{
  date: string;
  author: string;
  notice: string
}
const PostNotice = () => {
  const [notices, setNotices] = useState<INotice[]>([]);
  
  const handlePostField = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value)
    const newNotice: INotice = {
      notice: e.target.value,
      date: new Date().toDateString(),
      author : "",

    };
    setNotices([...notices, newNotice])

  }
 
  const handlePostBtn = () =>{
    console.log(notices);
  }
  return (
    <div className="flex justify-center py-6">
      <div>
        <textarea
          className="p-4  border-2 rounded-md border-gray-600"
          name=""
          id=""
          cols={100}
          rows={10}
        //   onChange={(
        //     ev: React.ChangeEvent<HTMLInputElement>,
        // ): void => handlePostField(ev.target.value)}
          onBlur={(e) => handlePostField(e)}
        >
        </textarea>
        <button onClick={handlePostBtn} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">POST</button>

        <div className="py-10">

          {
            notices.map(no => <NoticeFeed key={no.notice} notice={no.notice} date={no.date} author={no.author}></NoticeFeed> )
          }

        </div>
      </div>

    </div>
  );
};

export default PostNotice;
