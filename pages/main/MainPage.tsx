import type { NextPage } from "next";
import Button from "@mui/material/Button";

const MainPage: NextPage = () => {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default MainPage;
