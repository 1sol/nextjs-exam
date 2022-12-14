import { FC } from "react";
import { Layout } from "@components/container";
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { infoList, recordList, slideList } from "../../config";

const Main = styled.div`
  .section-top {
    .title {
      color: ${({ theme }) => theme.colors.white};
    }

    .top-contents {
      .sub-title {
        ${({ theme }) => theme.common.flex};
        ${({ theme }) => theme.common.flexVerticalCenter};
        margin-bottom: 25px;
        span {
          font-size: 17px;
          font-weight: ${({ theme }) => theme.fontWeight.font500};
          letter-spacing: -0.4px;
        }
      }
      .info {
        line-height: 1.4;
        font-size: 13px;
        font-weight: ${({ theme }) => theme.fontWeight.font500};
        color: ${({ theme }) => theme.colors.darkGray2};
      }
    }
  }

  .section-contents {
    &__inner {
      background-color: ${({ theme }) => theme.colors.white};
    }

    .record {
      ul {
        ${({ theme }) => theme.common.flex};
        ${({ theme }) => theme.common.flexVerticalCenter};
        ${({ theme }) => theme.common.flexSpaceBetween};
        .record-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          ${({ theme }) => theme.common.flexAlignCenter};
          background-color: ${({ theme }) => theme.colors.lightGray};
        }

        li {
          ${({ theme }) => theme.align.center};
          cursor: pointer;
        }
        p {
          margin-top: 5px;
          font-size: 12px;
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
      <Main className="main">
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
              <h1 className="title">????????? ????????? ??????</h1>
              <div className="top-contents box">
                <div className="contents-inner">
                  <div className="sub-title">
                    <i className="icon icon-check" />
                    <span>?????? ????????? ????????? ???????????????</span>
                  </div>
                  <p className="info">
                    ???????????? ????????? ???????????? <br /> ?????? ????????????????????? ?????????
                    ???????????? <br /> ????????????????????? ??? ?????? ????????? ????????? ?????????
                    ??? ????????????.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/** contents */}
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
              <h1 className="title">
                ??????<button className="more">?????? ??????</button>
              </h1>
              <div className="record">
                <ul>
                  {recordList.map((item, index) => (
                    <li key={index}>
                      <div className="record-icon">
                        <i className={`icon icon-record ${item.icon}`} />
                      </div>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/** contents - advertising */}
            <div className="section advertising">
              <div className="slider">
                <Carousel
                  PrevIcon={<ArrowBackIosNewIcon />}
                  NextIcon={<ArrowForwardIosIcon />}
                  activeIndicatorIconButtonProps={{
                    style: {
                      color: "#44bbcd",
                      fontSize: "12px",
                    },
                  }}
                  interval={4500}
                  duration={500}
                  animation="slide"
                >
                  {slideList.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <a>
                        <div className="slide-item">
                          <Image
                            src={`/${item.image as any}`}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </a>
                    </Link>
                  ))}
                </Carousel>
              </div>
            </div>

            {/** contents - info */}
            <div className="section info">
              <div className="inner">
                <h1 className="title">
                  ?????? ??????<button className="more">?????????</button>
                </h1>
                <div className="info-item__wrap">
                  {infoList.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <a className="info-item">
                        <div className="img">
                          <Image
                            src={`/${item.image as any}`}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                            className="img"
                          />
                        </div>
                        <div className="text">
                          <span>{item.category}</span>
                          <p>{item.title}</p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/** contents - notice */}
            <div className="section notice">
              <div className="inner">
                <div className="notice-item">
                  <ul>
                    <li className="box">
                      ????????????&?????????
                      <p>
                        ??????????????? ???????????? <br />
                        ????????? ?????????!
                      </p>
                    </li>
                    <li className="box">
                      ????????????
                      <p>
                        ??????????????? ?????? ????????? <br />
                        ????????? ?????????!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </Main>
    </Layout>
  );
};

export default MainPage;
