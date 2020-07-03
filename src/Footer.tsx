import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Footer(): JSX.Element {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://jacksonhu.com/">
        Jackson Ming Hu and co-authors
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
