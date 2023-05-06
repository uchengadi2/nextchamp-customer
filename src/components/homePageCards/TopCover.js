import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Snackbar from "@material-ui/core/Snackbar";

import { baseURL } from "./../../apis/util";

import theme from "./../ui/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    //height: "100%",
    //height: 350,
    width: "100%",

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "5em",
    marginBottom: "1em",
    padding: 0,
    // "&:hover": {
    //   //border: "solid",
    //   //borderColor: theme.palette.common.grey,
    // },
  },
  rootMobile: {
    maxWidth: 600,
    //height: 440,
    height: 800,
    width: 400,

    marginLeft: "10px",
    //borderRadius: 30,
    marginTop: "5em",
    marginBottom: "3em",
    padding: 0,
    backgroundColor: "#FFFFFF",

    "&:hover": {
      //border: "solid",
      //borderColor: theme.palette.common.grey,
    },
  },
  mediaMobile: {
    height: 150,
    width: 150,
    marginLeft: "80px",
  },
  media: {
    height: "100%",
    width: "100%",
    //marginLeft: "80px",
    //marginTop: "80px",
  },

  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: "55px",
    marginLeft: "160px",
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  dialog: {
    //maxWidth: 325,
    maxWidth: 500,
    //height: 450,
    marginLeft: "10px",
    borderRadius: 30,
    //marginTop: "10em",
    padding: 0,
    marginTop: -20,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "250px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function TopCover() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openForgotPasswordForm, setOpenForgotPasswordForm] = useState(false);

  const [currencyName, setCurrencyName] = useState("naira");
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [product, setProduct] = useState({});
  const [vendorName, setVendorName] = useState();
  const [minLearnerSlot, setMinLearnerSlot] = useState(1);

  // const { token, setToken } = useToken();
  // const { userId, setUserId } = useUserId();
  const [expanded, setExpanded] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMDUp = useMediaQuery(theme.breakpoints.up("md"));

  let imageUrl = "";
  if (product) {
    imageUrl = `${baseURL}/images/courses/${product.imageCover}`;
  }

  const Str = require("@supercharge/strings");

  return (
    <>
      {matchesMDUp ? (
        <Card className={classes.root} disableRipple={true}>
          {/* <CardActionArea disableRipple> */}
          <Grid container direction="row">
            {/* <Grid item style={{ width: 350 }}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt={product.title}
                  image={imageUrl}
                  //title={product.name}
                  crossOrigin="anonymous"
                />
              </Grid> */}
            <Grid item style={{ width: "48%", border: "1px dotted grey" }}>
              <CardContent disableRipple>
                <Typography variant="h5" color="textSecondary" component="p">
                  At NextChamp, we take students through a combination of
                  teachings, practices, mockings, assessments and mentoring. At
                  the end of each course, a student is evaluated and assessed
                  based on the module and/or capstone projects on that course.
                </Typography>
                <br />
                <Typography variant="h5" color="textSecondary" component="p">
                  A certificate of attendance will be awarded to all students at
                  the completion of a course. However the students that meet the
                  NextChamp grade mark on that course will become a NextChamp.
                </Typography>
              </CardContent>
            </Grid>

            <Grid
              item
              style={{
                width: "50%",
                marginLeft: "1.7%",
                border: "1px dotted grey",
              }}
            >
              <CardContent disableRipple>
                <Typography variant="h5" color="textSecondary" component="p">
                  Corporations and Institutions that need trusted and competent
                  hands in their workforce or as part of a project could hire
                  from the pool of the professional NextChamps (Next Champion).
                  However Academic NextChamps will have the confidence they need
                  to overcome further challenges on that study domain.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          {/* </CardActionArea> */}
        </Card>
      ) : (
        <Card className={classes.rootMobile} disableRipple>
          <CardActionArea disableRipple>
            <Grid container direction="row">
              <Grid item style={{ width: 350 }}>
                <CardMedia
                  className={classes.mediaMobile}
                  component="img"
                  alt={product.name}
                  image={imageUrl}
                  //title={product.name}
                  crossOrigin="anonymous"
                />
              </Grid>
              <Grid item style={{ width: "40%", border: "1px dotted grey" }}>
                <CardContent disableRipple>
                  <Typography variant="h4" color="textSecondary" component="p">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                  >
                    {Str(product.shortDescription).limit(200, "...").get()}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    component="p"
                    style={{ marginTop: 5, marginBottom: 15 }}
                  >
                    <span style={{ marginLeft: 130 }}>
                      <strong>
                        {product.pricePerUnit
                          ? product.pricePerUnit
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                          : 0}
                        /unit
                      </strong>
                    </span>
                  </Typography>
                  <Typography>
                    <span
                      style={{ fontSize: 15, marginLeft: 10, marginTop: 20 }}
                    >
                      <strong>Sku:</strong> &nbsp;
                      <span>{product.sku}</span>
                    </span>
                  </Typography>

                  <Typography>
                    <span style={{ fontSize: 15, marginLeft: 10 }}>
                      <strong> Product Location:</strong>
                      <span>
                        {stateName}/{countryName}
                      </span>
                    </span>
                  </Typography>
                  <Typography>
                    <span style={{ fontSize: 15, marginLeft: 10 }}>
                      <strong>
                        Delivery Period within {stateName}/{countryName}:
                      </strong>
                      <span>
                        {product.estimatedDeliveryPeriodInDays}&nbsp;day(s)/
                        {product.estimatedDeliveryPeriodInHours}&nbsp;hour(s)/
                        {product.estimatedDeliveryPeriodInMinutes}&nbsp;minutes
                      </span>
                    </span>
                  </Typography>

                  <Typography>
                    <span style={{ fontSize: 15, marginLeft: 10 }}>
                      <strong>
                        Delivery Cost within &nbsp; {stateName}/{countryName}{" "}
                        for the initial first{" "}
                        {product.maxmumQuantityForBaselineDelivery} unit:
                      </strong>
                      <span>
                        {product.baselineDeliveryCostWithinProductLocation
                          ? product.baselineDeliveryCostWithinProductLocation
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                          : 0}
                      </span>
                    </span>
                  </Typography>
                  <Typography>
                    <span style={{ fontSize: 15, marginLeft: 10 }}>
                      <strong>
                        Subsequent Delivery Cost per Unit within &nbsp;{" "}
                        {stateName}/{countryName}:
                      </strong>
                      <span>
                        {product.deliveryCostPerUnitWithinProductLocation
                          ? product.deliveryCostPerUnitWithinProductLocation
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                          : 0}
                      </span>
                    </span>
                  </Typography>
                  {/* <Typography style={{ marginTop: 10 }}>
                    <span style={{ fontSize: 15, marginLeft: 10 }}>
                      <strong> Vendor:</strong>
                      <span>{vendorName}</span>
                    </span>
                  </Typography> */}
                </CardContent>
              </Grid>

              <Grid item style={{ width: "40%", border: "1px dotted grey" }}>
                {/* <SearchPageAction
                  price={product.pricePerUnit}
                  minimumQuantity={minLearnerSlot}
                  remainingTotalUnits={product.remainingTotalUnits}
                  weight={product.weightPerUnit}
                  productId={product.id}
                  categoryId={product.category}
                  token={props.token}
                  userId={props.userId}
                  currency={product.currency}
                  handleMakeOpenLoginFormDialogStatus={
                    handleMakeOpenLoginFormDialogStatus
                  }
                  handleFailedSnackbar={handleFailedSnackbar}
                  handleSuccessfulCreateSnackbar={
                    handleSuccessfulCreateSnackbar
                  }
                  getCurrencyCode={getCurrencyCode}
                  handleCartItemForCheckoutBox={
                    props.handleCartItemForCheckoutBox
                  }
                /> */}
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      )}
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            marginTop: 110,
            height: 540,
            paddingBottom: "3em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "2em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "2em",
          },
        }}
      >
        <DialogContent>
          <Card className={classes.dialog}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt={product.name}
                image={imageUrl}
                crossOrigin="anonymous"
              />
            </CardActionArea>
          </Card>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </>
  );
}
