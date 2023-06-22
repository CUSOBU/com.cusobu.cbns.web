import { Link, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Copyright({ sx }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={sx}>
      {"Copyright © "}
      <Link color="inherit" href="https://mi.sitio.pto.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

Copyright.propTypes = {
  sx: PropTypes.object,
};
