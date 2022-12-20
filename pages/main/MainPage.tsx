import { FC } from "react";
import Grid from "@mui/material/Grid";
import { Layout } from "@components/container";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Footer = styled.div``;

const Main = styled.div`
  margin-top: var(--offset-top);
`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const MainPage: FC = () => {
  return (
    <Layout>
      <Main>
        <div className="section">
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.h1 variants={itemVariants}>
              main 입니다 main 입니다 main 입니다 main 입니다 main 입니다 main
              입니다
            </motion.h1>
          </motion.div>
        </div>
        <Footer>
          <Grid container>
            <p>
              (주)에이아이투유
              <br />
              사업자등록번호 : 125-86-33065
              <br />
              서울특별시 성북구 고려대로 73 고려대학교 의과대학
            </p>
          </Grid>
        </Footer>
      </Main>
    </Layout>
  );
};

export default MainPage;
