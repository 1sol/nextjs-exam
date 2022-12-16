import { mainConfigs } from "../configs";

export const REDIRECT_PATH = "/";

const routeConfigs = [
  ...mainConfigs,

  {
    exact: true,
    path: "/",
  },
];

export default routeConfigs;
