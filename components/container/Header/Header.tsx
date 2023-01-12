import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";

const HeaderContents = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: var(--header-height);
  z-index: 100;
  padding-inline: var(--pc-padding-horizontal);
  width: 100%;
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexVerticalCenter};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Item = styled.div``;

interface HeaderProps {
  title?: string;
  backMode?: boolean;
  backBtn?: any;
  onClickBackBtn?: (data: any) => void;
  onClickHomeBtn?: () => void;
  searchMode?: boolean;
  enableSearch?: boolean;
  homeMode?: boolean;
  cancelMode?: boolean;
  cancel?: any;
  mypageMode?: boolean;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  useRouter;
  return (
    <HeaderContents>
      <Grid container className="header-inner">
        <Grid item xs={4}>
          <Item>
            {props.backMode ? (
              <button onClick={props.onClickBackBtn || (() => router.back())}>
                <Image
                  src="/assets/icons/icon-back.png"
                  width="25"
                  height="25"
                  alt="back"
                />
              </button>
            ) : (
              <button
                onClick={
                  props.onClickHomeBtn ||
                  (() => {
                    router.push("/");
                  })
                }
              >
                <Image
                  src="/assets/common/logo.png"
                  width="100"
                  height="29"
                  alt=""
                />
              </button>
            )}
          </Item>
        </Grid>
        {props.mypageMode && (
          <Grid item>
            <Item>
              <button>
                <i className="icon">
                  <PersonIcon />
                </i>
              </button>
            </Item>
          </Grid>
        )}
      </Grid>
    </HeaderContents>
  );
};

export default Header;
