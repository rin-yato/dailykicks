import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useContext } from "react";
import { Context } from "../layouts/Layout";
import Link from "next/link";
import { ButtonBase } from "@mui/material";

export default function Aside() {
  const { isOpen, setValue } = useContext(Context);

  const toggleDrawer =
    (open, delay = 0) =>
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setTimeout(() => {
        setValue(open);
      }, delay);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Button
        className="float-right z-30 p-1 mr-3 mt-2 min-w-min min-h-min rounded-full"
        onClick={toggleDrawer(false, 50)}
      >
        <i className="bx bx-x bx-sm text-black"></i>
      </Button>
      <List className="pt-20 mb-5">
        {["Sneakers", "About"].map((text, index) => (
          <Link href={`/${text.toLowerCase()}`} key={text}>
            <ListItem button key={text} className="my-4">
              <ListItemText
                primary={text}
                disableTypography
                className=" text-center font-semibold"
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className="w-full flex flex-col items-center gap-5 mt-5">
        <ListItem className="my-4">
          <ListItemText
            primary={'Contact'}
            disableTypography
            className=" text-center font-semibold"
          />
        </ListItem>
        <a href="https://www.facebook.com/Dailykicks.kh">
          <ButtonBase className="bg-[#0775E7] p-1.5 w-min rounded-full">
            <i className="bx bxl-facebook bx-md text-white"></i>
          </ButtonBase>
        </a>
        <a href="https://www.instagram.com/dailykicks.kh/">
          <ButtonBase className="instagram-bg p-1.5 w-min rounded-full">
            <i className="bx bxl-instagram bx-md text-white"></i>
          </ButtonBase>
        </a>
        <a href="https://t.me/Dailyshoes_kh">
          <ButtonBase className="bg-[#279AD2] p-1.5 w-min rounded-full">
            <i className="bx bxl-telegram bx-md text-white -translate-x-0.5"></i>
          </ButtonBase>
        </a>
        <a href="tel:086888217">
          <ButtonBase className="bg-[#51E45B] p-1.5 w-min rounded-full">
            <i className="bx bxs-phone bx-md text-white"></i>
          </ButtonBase>
        </a>
      </List>
    </Box>
  );

  return (
    <div className="overflow-y-hidden">
      <React.Fragment key={"right"}>
        <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
