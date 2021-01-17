import React from "react";
import { useRouter } from "next/router";

const Item = ({ time_ago, id, title }) => {
  const router = useRouter();
  return (
    <div className="item">
      <h1>{title}</h1>
      <div className="item__details">
        <span onClick={() => router.push("/post/[id]", `/post/${id}`)}>
          More detail
        </span>
        <p>{time_ago}</p>
      </div>
    </div>
  );
};

export default Item;
