import React from "react";
import { useRouter } from "next/router";

const PageControler = () => {
  const {
    query: { page },
    push,
  } = useRouter();

  const getPagePadd = (op) => {
    let result = parseInt(page) || 1;
    return op === "+" ? ++result : --result;
  };
  const clickHandler = (op) => {
    if (getPagePadd(op) == 1) return push("/");
    push("/[]", `/${getPagePadd(op)}`);
  };
  return (
    <div className="controler">
      <div>
        <span
          style={{ visibility: `${page == 1 || !page ? "hidden" : "visable"}` }}
          onClick={clickHandler}
        >
          Previous
        </span>
        <span onClick={() => clickHandler("+")}>Next</span>
      </div>
    </div>
  );
};

export default PageControler;
