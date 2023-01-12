import LoginPage from "@pages/login/LoginPage";
import SignupPage from "@pages/signup/SignupPage";

const authConfigs = [
  /**
   * 로그인
   */
  {
    path: "/login",
    component: LoginPage,
    title: "",
  },
  /**
   * 회원가입
   */
  {
    path: "/signup",
    component: SignupPage,
    title: "",
  },
];

export default authConfigs;
