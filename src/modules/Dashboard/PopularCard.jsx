import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

// project imports
import OperationsAreaChartCard from "./OperationsAreaChartCard";
import MainCard from "../../components/cards/MainCard";
import SkeletonPopularCard from "../../components/cards/Skeleton/PopularCard";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();
  const data = [
    { label: "Total", color: "secondary", percent: 15, value: 300 },
    { label: "Procesando", color: "info", percent: 10, value: 150 },
    { label: "Completadas", color: "success", percent: 8, value: 50 },
    { label: "Fallidas", color: "error", percent: 40, value: 100 },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h4">Operaciones</Typography>
                  </Grid>
                  <Grid item display="flex" alignContent="center">
                    <Typography variant="h5" color="inherit" mr={1}>
                      Total
                    </Typography>
                    <Typography variant="body1" color="inherit">
                      2550
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: "16px !important" }}>
                <OperationsAreaChartCard />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  {data.map((el) => (
                    <>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Typography variant="subtitle1" color="inherit">
                                {el.label}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography
                                    variant="subtitle1"
                                    color="inherit"
                                  >
                                    {el.value}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      width: 16,
                                      height: 16,
                                      borderRadius: "5px",
                                      backgroundColor:
                                        theme.palette[el.color].light,
                                      color: theme.palette[el.color].dark,
                                      marginLeft: 1.875,
                                    }}
                                  >
                                    <KeyboardArrowDownOutlinedIcon
                                      fontSize="small"
                                      color={el.color}
                                    />
                                  </Avatar>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: theme.palette.info.dark }}
                          >
                            {`${el.percent}% ${el.label}`}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: 1.5 }} />
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: "center" }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularCard;
