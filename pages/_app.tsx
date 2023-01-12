import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import firebase from "firebase/app";
import "firebase/messaging";
import { getToken } from "utils/firebase";
import theme from "../utils/theme";
import "../styles/styles.scss";

const firebaseConfig = {
  apiKey: "AIzaSyDrqHlq93RCu8PCzUklO-Os94xYs8LThnk",
  authDomain: "my-project-69227.firebaseapp.com",
  projectId: "my-project-69227",
  storageBucket: "my-project-69227.appspot.com",
  messagingSenderId: "943360969949",
  appId: "1:943360969949:web:3629adda0c3c45d8badf34",
  measurementId: "G-DLNP766YW7",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }
// const messaging = firebase.messaging();

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   async function getMessageToken() {
  //     const token = await getToken();
  //     console.log(token);
  //   }
  //   getMessageToken();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <main id="root">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
