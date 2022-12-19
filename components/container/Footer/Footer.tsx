import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const FooterContents = styled.div`
  padding: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterContents>
        <Grid container>
          <p>
            (주)에이아이투유
            <br />
            사업자등록번호 : 125-86-33065
            <br />
            서울특별시 성북구 고려대로 73 고려대학교 의과대학
          </p>
        </Grid>
      </FooterContents>
    </Container>
  );
};

export default Footer;
