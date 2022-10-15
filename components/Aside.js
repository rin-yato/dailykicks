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
      <Button className="float-right z-30 p-1 mr-1.5 mt-1 min-w-min min-h-min rounded-full" onClick={toggleDrawer(false, 50)}>
        <i className="bx bx-x bx-sm text-black"></i>
      </Button>
      <List className="pt-20">
        {["Sneakers", "Accessories", "About", "Contact"].map((text, index) => (
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
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
