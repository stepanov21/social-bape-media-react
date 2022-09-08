import React from 'react';
import { useState } from 'react';
import AddPost from './AddPost/AddPost';
import Post from './Post/Post';

function Main({data}) {
  const [posts, setPosts] = useState([
    {
      avatar: "https://www.cointribune.com/app/uploads/2021/09/bayc2.jpg",
      name: "Igor Stepanov",
      text: "Where are you going?",
      id: 1,
    },
    {
      avatar: "https://www.cointribune.com/app/uploads/2021/09/bayc2.jpg",
      name: "Igor Stepanov",
      text: "Where are you going?",
      id: 1,
    },
    {
      avatar: "https://www.cointribune.com/app/uploads/2021/09/bayc2.jpg",
      name: "Igor Stepanov",
      text: "Where are you going?",
      id: 1,
    },
  ]);


  return (
    <main className="main">
    <div className="main__content">
      <div className="main__cover">
        <img src="https://cdn.wallpapersafari.com/65/25/ZiQaLI.jpg" alt="" />
      </div>
      <div className="main__profile profile">
        <div className="profile__avatar">
          <img src="https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png" alt="" />
        </div>
        <div className="profile__info">
          <h3 className="profile__name">Igor Stepanov</h3>
          <p className="profile__date">Date of Birth: 2 january</p>
          <p className="profile__city">City: Minsk</p>
          <p className="profile__education">Education: BSU’11</p>
          <p className="profile__website">Web Site: https://it-maura.com</p>
        </div>
      </div>
      <div className="main__posts posts">
        <AddPost/>
        {data.posts.map((item, id) => <Post key={id} props={item}/>)}
      </div>
    </div>
  </main>
  );
}

export default Main;