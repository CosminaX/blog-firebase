import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {postList.map((posts) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{posts.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && posts.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(posts.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{posts.post}</div>
            <h3> @{posts.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
