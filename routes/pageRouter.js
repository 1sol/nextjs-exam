import React from "react";
import Link from "next/link";
import shortid from "shortid";
import routeConfigs from "./routeConfigs";
import MainPage from "@pages/main";

export const REDIRECT_PATH = "/";

function PageRouter() {
  return (
    <div>
      {routeConfigs.map(({ path, title }) => (
        <Link key={shortid.generate()} href={path}>
          <a>{title}</a>
        </Link>
      ))}
      <MainPage />
    </div>
  );
}

export default PageRouter;
