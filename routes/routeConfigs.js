import { mainConfigs, authConfigs } from "../configs";

export const REDIRECT_PATH = "/";

const routeConfigs = [
  ...mainConfigs,
  ...authConfigs,

  {
    exact: true,
    path: "/",
  },
];

export default routeConfigs;
