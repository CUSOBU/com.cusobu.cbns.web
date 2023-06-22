import PropTypes from "prop-types";
import { List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { navigation } from "../settings";

const SideMenu = ({ open = false }) => {
  const navigateTo = (link) => {
    link && console.log(link);
  };

  return (
    <List component="nav">
      {navigation.map(({ title, link, icon, header }, index) => {
        if (header) {
          return (
            <ListSubheader
              key={index}
              component="h1"
              sx={{ display: open ? "block" : "none" }}
            >
              {title}
            </ListSubheader>
          );
        }

        return (
          <ListItemButton key={index} onClick={() => navigateTo(link)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

SideMenu.propTypes = {
  open: PropTypes.bool,
};

export default SideMenu;
