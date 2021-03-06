import React, { useState } from "react";
import Footer from "../common/Footer";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { RegFormInput, RegFormSchema } from "../../schemas/RegisterForm";
import MsgDialog, { MsgDialogData } from "../common/MsgDialog";
import { registerUser } from "../../api/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<RegFormInput>({
    resolver: yupResolver(RegFormSchema),
  });

  const [msg, setMsg] = useState<MsgDialogData | null>(null);

  const handleRegisterUser = async (form: RegFormInput): Promise<void> => {
    try {
      const result = await registerUser(form);
      const data: MsgDialogData = {
        title: "User created",
        content: result.data.message || "Unknown state",
        redirect: "/",
      };
      setMsg(data);
    } catch (error) {
      const data: MsgDialogData = {
        title: "Failed when registering",
        content: error.message || "Unknown error",
      };
      setMsg(data);
    }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register new account
        </Typography>
        <form noValidate className={classes.form} onSubmit={handleSubmit(handleRegisterUser)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User name"
                name="username"
                autoComplete="username"
                inputRef={register}
                error={errors.username ? true : false}
                helperText={errors.username ? errors.username.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="realname"
                label="Real name"
                name="name"
                autoComplete="name"
                inputRef={register}
                error={errors.name ? true : false}
                helperText={errors.name ? errors.name.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                inputRef={register}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : ""}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <MsgDialog data={msg} />
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  );
}
