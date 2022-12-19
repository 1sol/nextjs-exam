import Container from "@mui/material/Container";
import styled from "styled-components";
import { Header, Footer } from "@components/container";
import { BottomTab } from "@components/presentational";

const Contents = styled.div`
  height: 100vh;
`;

const Layout = ({
  chidren,
  isVisibleHeader,
  isVisibleBottomTab,
  isVisibleFooter,
}: any) => {
  return (
    <Container>
      {isVisibleHeader && <Header />}
      <Contents>
        <div>{chidren}</div>
      </Contents>
      {isVisibleBottomTab && <BottomTab />}
      {isVisibleFooter && <Footer />}
    </Container>
  );
};

export default Layout;
