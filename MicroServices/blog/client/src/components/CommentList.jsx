// import { useState, useEffect } from "react";
// import axios from "axios";

// eslint-disable-next-line react/prop-types
const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:4001/posts/${postId}/comments`
  //     );
  //     setComments(res.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     // Handle the error, e.g., set an error state or display a message to the user
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const renderedComponents = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComponents}</ul>;
};

export default CommentList;
