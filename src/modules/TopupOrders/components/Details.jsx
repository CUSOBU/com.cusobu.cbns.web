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
import { formatDate } from "../../../utils/format-date.util";

const Details = () => {
  const { closeDialog, isOpen, payload } = useDetailsContext(DIALOG_NAMESPACE);

  const fields = useFieldsByRole(sessionStorage.getItem("roles") || "provider");

  return (
    <Drawer
      SlideProps={{ direction: "left" }}
      anchor="right"
      open={isOpen}
      onClose={closeDialog}
      PaperProps={{ style: { minWidth: "400px" } }}
    >
      {!!payload && payload.id ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="primary"
          >
            <Typography variant="h4" mx={2}>
              Detalles
            </Typography>
            <IconButton aria-label="close" onClick={closeDialog}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {fields?.map(
              ({ field, headerName, type }) =>
                payload[field] && (
                  <ListItem key={field} dense sx={{ py: 0 }}>
                    <ListItemText
                      primary={`${headerName}:`}
                      secondary={
                        type === "date"
                          ? formatDate(payload[field])
                          : payload[field]
                      }
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
