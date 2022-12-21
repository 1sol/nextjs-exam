import { FC } from "react";
import Grid from "@mui/material/Grid";
import { Layout } from "@components/container";
import styled from "styled-components";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/FactCheck";

const Main = styled.div`
  padding-top: var(--offset-top);

  .section-top {
    background-color: #44bbcd94;
    padding: 30px 0 45px 0;

    .title {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .title {
    font-size: 18px;
  }

  .main-contents {
    height: 180px;
    cursor: pointer;

    .icon-check {
      margin-right: 3px;
    }

    .sub-title {
      ${({ theme }) => theme.common.flex};
      ${({ theme }) => theme.common.flexVerticalCenter};
      margin-bottom: 25px;
      span {
        font-size: 17px;
        font-weight: ${({ theme }) => theme.fontWeight.font600};
        letter-spacing: -0.4px;
        color: ${({ theme }) => theme.colors.blue};
      }
    }
    .info {
      line-height: 1.4;
      font-size: 13px;
      font-weight: ${({ theme }) => theme.fontWeight.font500};
      color: ${({ theme }) => theme.colors.darkGray2};
    }
  }

  .section-contents {
    position: relative;
    &__inner {
      position: absolute;
      top: -15px;
      width: 100%;
      padding: 20px 0;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.white};
    }

    .record {
      ul {
        ${({ theme }) => theme.common.flex};
        ${({ theme }) => theme.common.flexVerticalCenter};
        li {
          ${({ theme }) => theme.common.flexAlignCenter};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.lightGray};
        }
      }
    }
  }
`;

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const MainPage: FC = () => {
  return (
    <Layout>
      <Main>
        <motion.section
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="section-top"
        >
          <div className="inner">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
            >
              <h1 className="title">오늘의 아토피 지수</h1>
              <div className="main-contents">
                <div className="contents-inner">
                  <div className="sub-title">
                    <i className="icon icon-check">
                      <CheckIcon />
                    </i>
                    <span>나의 아토피 피부염 체크해보기</span>
                  </div>
                  <p className="info">
                    여러가지 지표를 이용하여 <br />
                    나의 아토피피부염의 증상을 관찰하고 <br />
                    아토피피부염이 내 삶에 미치는 영향을 이해할 수 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="section-contents"
        >
          <motion.div
            variants={itemVariants}
            className="section-contents__inner"
          >
            <div className="inner">
              <h1 className="title">기록</h1>
              <div className="record">
                <ul>
                  <li>기분</li>
                  <li>식사</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </Main>
    </Layout>
  );
};

export default MainPage;
