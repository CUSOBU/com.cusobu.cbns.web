import {
  Drawer,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/details";
import { useFieldsByRole } from "../hooks/detailsFieldsByRole";

const Details = () => {
  const { closeDialog, isOpen, payload } = useDetailsContext(DIALOG_NAMESPACE);

  const fields = useFieldsByRole(sessionStorage.getItem("roles") || "provider");

  return (
    <Drawer
      SlideProps={{ direction: "left" }}
      anchor="right"
      open={isOpen}
      onClose={closeDialog}
      sx={{ minWidth: "400px" }}
    >
      {!!payload && payload.id ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="primary"
          >
            <Typography variant="h6" mx={2} height="40px">
              Details
            </Typography>
            <IconButton aria-label="close" onClick={closeDialog}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />
          <List>
            {fields?.map(
              ({ field, headerName }) =>
                payload[field] && (
                  <ListItem key={field} dense sx={{ py: 0 }}>
                    <ListItemText
                      primary={`${headerName}:`}
                      secondary={payload[field]}
                    />
                  </ListItem>
                )
            )}
          </List>
        </>
      ) : (
        <>Not Info</>
      )}
    </Drawer>
  );
};

export default Details;