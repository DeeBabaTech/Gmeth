import * as React from "react";
import Box from "@mui/material/Box";
import { SwipeableDrawer } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MenuIcon } from "lucide-react";

export default function DrawerNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navList = [
    {
      id: "home",
      nav: "Home",
    },
    {
      id: "about",
      nav: "About",
    },
    {
      id: "services",
      nav: "Services",
    },
    {
      id: "projects",
      nav: "Projects",
    },
    {
      id: "testimonials",
      nav: "Testimonials",
    },
    {
      id: "contact",
      nav: "Contact Us",
    },
  ];

  const DrawerList = (
    <div
      className='p-16 text-center h-screen bg-secondary text-white'
      role='presentation'
      onClick={toggleDrawer(false)}>
      <List>
        {navList.map((text) => (
          <div key={text.id} className='my-10 text-center text-lg'>
            <a href={`#${text.id}`}> {text.nav}</a>
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div className='md:hidden'>
      <MenuIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}>
        {DrawerList}
      </SwipeableDrawer>
    </div>
  );
}
