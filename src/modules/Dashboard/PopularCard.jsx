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
import { useDashboardContext } from "./contexts/DashboardContext";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();
  const {
    balanceData,
    remittanceByStatus,
    isLoading: dataLoading,
  } = useDashboardContext();
  const data = [
    {
      label: "Total",
      color: "secondary",
      value: remittanceByStatus?.total ?? 0,
    },
    {
      label: "Procesando",
      color: "info",
      value: remittanceByStatus?.processing ?? 0,
    },
    {
      label: "Completadas",
      color: "success",
      value: remittanceByStatus?.complete ?? 0,
    },
    {
      label: "Fallidas",
      color: "error",
      value: remittanceByStatus?.cancel ?? 0,
      last: true,
    },
  ];

  return (
    <>
      {isLoading || dataLoading ? (
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
                      {balanceData?.operational_limit}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: "16px !important" }}>
                <OperationsAreaChartCard
                  total={balanceData?.operational_limit ?? 0}
                  local={{
                    label: balanceData?.local_currency || 'MLC',
                    value: balanceData?.local_balance ?? 0,
                  }}
                  ext={{
                    label: balanceData?.ext_currency || "USD",
                    value: balanceData?.ext_balance ?? 0,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  {data.map((el) => (
                    <div key={el.label}>
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
                      </Grid>
                      {!el.last && <Divider sx={{ my: 1.5 }} />}
                    </div>
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
