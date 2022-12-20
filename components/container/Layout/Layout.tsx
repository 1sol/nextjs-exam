import React, { ReactElement, ReactNode } from 'react';
import styled from "styled-components";
import { Header } from "@components/container";
import { BottomTab } from "@components/presentational";

const Contents = styled.div`
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0 9px 20px #f6f6f6;

  @media ${({ theme }) => theme.device.tabletMin} {
    width: 480px;
  }
`;

type LayoutProps = {
  children: ReactElement | ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {<Header />}
      <Contents>{children}</Contents>
      {<BottomTab />}
    </>
  );
};

export default Layout;
