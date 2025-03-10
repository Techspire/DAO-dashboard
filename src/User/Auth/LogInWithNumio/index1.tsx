import React, { useEffect } from "react";
import { Title } from "../Shared";
import Layout from "../Layout";
import style from "./style.module.scss";
import numio from "numio-cdn";
import { connect } from "react-redux";
import { loginWithNumio } from "redux/authActions";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import mobile from "assets/images/mobile.svg";
import numioLogo from "assets/images/numioLogo.svg";
import Login_with from "assets/images/Login_with.svg";

var QRCode = require("qrcode.react");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      width: "100%",
      backgroundColor: "#EA8604",
      color: "white",
      borderColor: "#EA8604",
      "&:hover": {
        textDecoration: "underline",
        //  color: "#0056b3",
        backgroundColor: "#EA8604",
        borderColor: "#EA8604",
      },
      position: "relative",
      height: "56rem",
      padding: "0 20rem",
      borderRadius: "5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "20rem",
      transition: ".2s",
      minWidth: "200rem",
      border: "1px solid",
      userSelect: "none",
      marginTop: "30rem",
    },
    root2: {
      "& .MuiSnackbarContent-root": {
        backgroundColor: "red",
        color: "white",
        fontSize: "10px",
      },
    },
    alert : {
      "& .MuiAlert-message": {
        fontSize: "12px",
        display: "flex",
        alignItem: "center",
      },
    },
    layout: {
      height: "auto",
      width: "56%",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    numioLogo: {
      width: "127px",
      height: "25px",
      marginLeft: "3px",
    },
  })
);

const LogInWithNumio = (props: any) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    qrURL: "",
    loading: false,
    redirect: "",
  });

  const temp = async () => {
    const numioCDN = new numio({ app_id: "8464920" });
    let res: any = await numioCDN.getUrlForLogin();
    setValues({ ...values, qrURL: res });

    const callRes = await numioCDN.call(async (token: any) => {
      let body = {
        token: token,
        app_secret: "providers Secert",
        userDetails: ["fullname", "email"],
      };

      const user = await props.loginWithNumio(body);

      if (user && user.token && !user.isAdmin) {
        setValues({ ...values, redirect: "user" });
      } else if (user && user.token && user.isAdmin) {
        setValues({ ...values, redirect: "admin" });
      }
    });
  };

  useEffect(() => {
    temp();
  }, []);

  return values.redirect === "user" ? (
    <Redirect to="/" />
  ) : values.redirect === "admin" ? (
    <Redirect to="/admin" />
  ) : (
    <Layout className={classes.layout}>
      <Grid container>
        <Grid
          item
          sm={12}
          xs={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src={mobile} style={{ height: "360px", width: "250px" }} />
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          md={6}
          lg={6}
          style={{
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={classes.numioLogo}>
                <img
                  className={classes.image}
                  alt="Login_with"
                  src={Login_with}
                />
              </div>
              <div className={classes.numioLogo}>
                <img className={classes.image} alt="numio" src={numioLogo} />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F9F9F9",
                padding: "20px",
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={style.scanQRText}>
                Scan the QR code with your Numio app to login
              </div>
              <div className={style.qr}>
                <QRCode size={160} value={values.qrURL} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.userDetails,
  redirect: state.userDetails.isloggedIn,
});

export default connect(mapStateToProps, { loginWithNumio })(LogInWithNumio);
