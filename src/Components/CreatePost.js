import { useState } from "react";
import "./CreatePost.css";

export const CreatePost = () => {
  const contextPageBox = "flex justify-center items-center h-[90vh]";
  const h1Style = "text-[32px] font-bold";
  const h2Style = "text-[20px] py-[5px]";
  const buttonStyle = "rounded bg-gray-300 px-5 py-1 hover:bg-gray-200 transition-all duration-300";

  const[title, setTitle] = useState();
  const[postText, setPostText] = useState();

  const createPost = () => {
    console.log(title)
    console.log(postText)
  }

  return (
    <div className={contextPageBox}>
      <div className="postContainer">
        <h1 className={h1Style}>記事を投稿する</h1>
        <h2 className={h2Style}>タイトル</h2>
        <input
          type="text"
          placeholder='タイトルを記入'
          onChange={(e) => setTitle(e.target.value)}/>
        <h2 className={h2Style}>投稿記事</h2>
        <div>
          <textarea
            placeholder='テキストを記載'
            onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button
          className={buttonStyle}
          onClick={createPost}>投稿</button>
      </div>
    </div>
  )
}
