import Image from "next/image";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";

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

const Item = styled.div``;

const Header = () => {
  return (
    <HeaderContents>
      <Grid container className="header-inner">
        <Grid item xs={4}>
          <Item>
            <Link href="/">
              <a>
                <Image
                  src="/assets/common/logo.png"
                  width="100"
                  height="29"
                  alt=""
                />
              </a>
            </Link>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <button>
              <i className="icon">
                <PersonIcon />
              </i>
            </button>
          </Item>
        </Grid>
      </Grid>
    </HeaderContents>
  );
};

export default Header;
