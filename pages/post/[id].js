import unfetch from "isomorphic-unfetch";
import Comment from "../../components/Comment";

const Post = ({
  data: { time_ago, title, url, user, points, comments_count, comments },
}) => {
  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__details">
        <h4>
          <span style={{ fontSize: "0.7rem" }}>from</span> {user}
        </h4>
        <h4>{time_ago}</h4>
        <h4>with {points} point</h4>
        <p>
          <a href={url}>Go to Refrence</a>
        </p>
      </div>
      <div className="post__comment">
        <div className="post__comment--header">
          <p>Post commnets : </p>
          <p>All comment {comments_count}</p>
        </div>
        <div className="post__comment--container">
          {comments.map((el, i) => (
            <Comment {...el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

Post.getInitialProps = async ({ query: { id } }) => {
  try {
    const res = await unfetch(`https://node-hnapi.herokuapp.com/item/${id}`);
    const data = await res.json();
    return {
      data,
    };
  } catch (err) {
    return {
      err,
    };
  }
};

export default Post;
