import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AnalysisIcon from "@mui/icons-material/Troubleshoot";
import HistoryIcon from "@mui/icons-material/EventNote";
import CommunityIcon from "@mui/icons-material/ChatBubble";
import InfoIcon from "@mui/icons-material/ImportContacts";
import styled from "styled-components";

const Contents = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: var(--tabbar-height);
  ${({ theme }) => theme.common.flexAlignCenter};
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  z-index: 100;

  @media ${({ theme }) => theme.device.tabletMin} {
    margin-inline: var(--pc-padding-horizontal);
  }
`;

const BottomTab = () => {
  const [value, setValue] = useState<string>("home");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Contents className="bottom-tab">
      <BottomNavigation value={value} onChange={() => handleChange}>
        <BottomNavigationAction
          label="홈"
          value="home"
          icon={<HomeIcon />}
          className="btn-bottom-tab"
        />
        <BottomNavigationAction
          label="내 피부"
          value="home"
          icon={<AnalysisIcon />}
          className="btn-bottom-tab"
        />
        <BottomNavigationAction
          label="기록"
          value="home"
          icon={<HistoryIcon />}
          className="btn-bottom-tab"
        />
        <BottomNavigationAction
          label="커뮤니티"
          value="home"
          icon={<CommunityIcon />}
          className="btn-bottom-tab"
        />
        <BottomNavigationAction
          label="톡톡지식"
          value="home"
          icon={<InfoIcon />}
          className="btn-bottom-tab"
        />
      </BottomNavigation>
    </Contents>
  );
};

export default BottomTab;
