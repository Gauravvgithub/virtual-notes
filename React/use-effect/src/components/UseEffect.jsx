import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [lesson, setLesson] = useState({
    author: "loading...",
    content: "loading...",
    tags: "loading...",
    authorSlug: "loading...",
    length: "loading...",
    dateAdded: "loading...",
    dateModified: "loading...",
    id: "loading...",
    message: "loading...",
  });

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json); its works
        setLesson({
          author: json.data.author,
          content: json.data.content,
          tags: json.data.tags,
          authorSlug: json.data.authorSlug,
          length: json.data.length,
          dateAdded: json.data.dateAdded,
          dateModified: json.data.dateModified,
          id: json.data.id,
          message: json.message,
        });
      });
  }, []);

  return (
    <>
      <div
        style={{
          margin: 5,
          padding: "10px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "cadetblue",
          color: "black",
          borderRadius:"20px",
          fontSize:"20px"
        }}
      >
        <div>Id : {lesson.id}</div>
        <div> Author Name : {lesson.author}</div>
        <div> Content Name : {lesson.content}</div>
        <div>Tags : {lesson.tags}</div>
        <div>AuthorSlug : {lesson.authorSlug}</div>
        <div>length : {lesson.length}</div>
        <div>dataAdded : {lesson.dateAdded}</div>
        <div>dateModified : {lesson.dateModified}</div>
        <div>message : {lesson.message}</div>
        <button
          style={{
            marginTop: "10px",
            backgroundColor: "#007FFF",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "16px",
          }}
        >
          Click Me to More
        </button>
      </div>
    </>
  );
};
