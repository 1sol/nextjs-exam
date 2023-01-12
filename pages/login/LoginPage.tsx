import { Header } from "@components/container";
import Image from "next/image";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

const Login = styled.div`
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <Login className="login container">
      <Header backMode />
      <div className="inner">
        <div className="login-logo">
          <div className="logo">
            <Image
              src="/assets/common/logo.png"
              width="120"
              height="35"
              alt="back"
            />
          </div>
        </div>
        <div className="login-contents">
          <form>
            <div className="login-contents__input">
              <TextField
                id="input-with-icon-textfield"
                label="이메일"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                className="textfield"
              />
            </div>
            <div className="login-contents__input">
              <TextField
                id="input-with-icon-textfield"
                label="비밀번호"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                className="textfield"
              />
            </div>
            <div className="login-contents__search">
              <ul>
                <li>
                  <button>아이디 찾기</button>
                </li>
                <li>
                  <button>비밀번호 찾기</button>
                </li>
              </ul>
            </div>
            <div className="login-contents__btn">
              <Button variant="contained" className="btn btn-login">
                로그인
              </Button>
            </div>
            <p className="text-or">OR</p>
            <div className="login-contents__sns">
              <div>
                <Button className="btn btn-kakao" variant="contained">
                  카카오로 시작하기
                </Button>
              </div>
              <div>
                <Button className="btn btn-google" variant="contained">
                  구글로 시작하기
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Login>
  );
};

export default LoginPage;
