import { Fragment } from "react";
import unfetch from "isomorphic-unfetch";

import Item from "../components/Item";
import PageControler from "../components/PageControler";

const Home = ({ data }) => {
  return (
    <Fragment>
      <div className="container">
        {data.map((el, i) => (
          <Item {...el} key={i} />
        ))}
        <PageControler />
      </div>
    </Fragment>
  );
};

Home.getInitialProps = async ({ req, res, query }) => {
  try {
    const res = await unfetch("https://node-hnapi.herokuapp.com/news");
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
export default Home;
