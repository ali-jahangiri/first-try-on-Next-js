import unfetch from "isomorphic-unfetch";
import PageControler from "../components/PageControler";

import Item from "../components/Item";

import { Fragment } from "react";

const PageCurrent = ({ data }) => {
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

PageCurrent.getInitialProps = async ({ query: { page } }) => {
  const res = await unfetch(
    `https://node-hnapi.herokuapp.com/news?page=${page}`
  );
  const data = await res.json();
  return {
    data,
  };
};

export default PageCurrent;
