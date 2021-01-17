import React from "react";
const Comment = ({ content, time_ago, user, comments, level, isChild, id }) => {
  const nestedComments = (comments || []).map((el, i) => (
    <Comment isChild {...el} key={i} />
  ));
  const borderColorChecker = () => {
    if (level === 1) return "#663399b8";
    if (level === 2) return "#66339982";
    if (level === 3) return "#6633994f";
  };
  return (
    <div
      style={{ borderColor: `${borderColorChecker()}` }}
      className={`comment ${isChild ? "comment__nested" : ""}`}
    >
      <h2>{user}</h2>
      <p>{content}</p>
      <p>time is {time_ago}</p>
      <p onClick={() => console.log({ id })}>Reply</p>
      {nestedComments}
    </div>
  );
};

export default Comment;
