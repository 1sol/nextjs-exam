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
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
`;

const BottomTab = () => {
  const [value, setValue] = useState<string>("home");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Contents>
      <BottomNavigation value={value} onChange={() => handleChange}>
        <BottomNavigationAction label="홈" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="내 피부"
          value="home"
          icon={<AnalysisIcon />}
        />
        <BottomNavigationAction
          label="기록"
          value="home"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
          label="커뮤니티"
          value="home"
          icon={<CommunityIcon />}
        />
        <BottomNavigationAction
          label="톡톡 지식"
          value="home"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Contents>
  );
};

export default BottomTab;
