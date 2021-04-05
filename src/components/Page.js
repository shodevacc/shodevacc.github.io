import React from "react";
import SEO from "./seo";
import Gohome from "./Gohome";

function Page({ children,title }) {
  return (
    <div>
      <SEO title={title} />
      <Gohome />
      {children}
    </div>
  );
}

export default Page;
