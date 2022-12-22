import Image from "next/image";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const HeaderContents = styled.div`
  position: fixed;
  top: 0;
  min-height: var(--header-height);
  z-index: 100;
  padding-inline: var(--pc-padding-horizontal);
  width: 100%;
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexVerticalCenter};
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderInner = styled.div`
  padding: ${({ theme }) => theme.paddings.base};
`;

const Item = styled.div``;

const Header = () => {
  return (
    <HeaderContents>
      <HeaderInner>
        <Grid container>
          <Grid item xs={4}>
            <Item>
              <Link href="/">
                <Image
                  src="/assets/common/logo.png"
                  width="100"
                  height="29"
                  alt=""
                />
              </Link>
            </Item>
          </Grid>
        </Grid>
      </HeaderInner>
    </HeaderContents>
  );
};

export default Header;
