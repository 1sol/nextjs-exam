import Image from "next/image";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const HeaderContents = styled.div`
  position: fixed;
  top: 0;
`;

const Item = styled.div``;

const Header = () => {
  return (
    <Container>
      <HeaderContents>
        <Grid container>
          <Grid item xs={4}>
            <Item>
              <a>
                <Image
                  src="/assets/common/logo.png"
                  width="100"
                  height="29"
                  alt=""
                />
              </a>
            </Item>
          </Grid>
        </Grid>
      </HeaderContents>
    </Container>
  );
};

export default Header;
