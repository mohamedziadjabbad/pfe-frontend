/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import Card from "@mui/material/Card";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";


import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

function Dashboard() {
    const navigation = useNavigate();
    const { isLogged } = useSelector((state) => state.user);
    const { size } = typography;
    const { chart, items } = reportsBarChartData;


    useEffect(() => {
        if (!isLogged) {
            navigation("/authentication/sign-in");
        }
    }, [isLogged]);

    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const handleToggleSideMenu = () => {
        setOpenConfigurator(dispatch, !openConfigurator);
    }
    
    return (
    <DashboardLayout>
        <DashboardNavbar />
        <SuiBox py={3}>
        <SuiBox mb={3}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                    title={{ text: "Users" }}
                    count="0"
                    // percentage={{ color: "success", text: "+55%" }}
                    icon={{ color: "info", component: "support" }}
                />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                    title={{ text: "Projects" }}
                    count="3"
                    // percentage={{ color: "success", text: "+3%" }}
                    icon={{ color: "info", component: "public" }}
                />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                title={{ text: "Clients" }}
                count="2"
                // percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
                />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
                <MiniStatisticsCard
                    title={{ text: "Members" }}
                    count="4"
                    // percentage={{ color: "success", text: "+5%" }}
                    icon={{ color: "info", component: "shopping_cart" }}
                />
            </Grid>
            </Grid>
        </SuiBox>

        <SuiBox mb={3}>
            <Grid item xs={12} lg={12}>
                <GradientLineChart
                title="Opened and Closed tasks over time"
                height="20.25rem"
                chart={gradientLineChartData}
                />
            </Grid>
        </SuiBox>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
            <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
            </Grid>
        </Grid>
        </SuiBox>

        <SuiBox mb={3}>
            <Card>
                <SuiBox pt={2} px={2}>
                    <SuiBox mb={0.5}>
                    <SuiTypography variant="h6" fontWeight="medium">
                        Projects
                    </SuiTypography>
                    </SuiBox>
                    <SuiBox mb={1}>
                    <SuiTypography variant="button" fontWeight="regular" color="text">
                        Liste des projets:
                    </SuiTypography>
                    </SuiBox>
                </SuiBox>
                <SuiBox p={2}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} xl={3}>
                            <DefaultProjectCard
                                title="Test project #1"
                                description="A detailed description of the project"
                                startDate="13-Jul-2022"
                                endDate="15-Jul-2022"
                                expectedEndDate="15-Jul-2022"
                                authors={[
                                    { image: team1, name: "Elena Morison" },
                                    { image: team2, name: "Ryan Milly" },
                                    { image: team3, name: "Nick Daniel" },
                                    { image: team4, name: "Peterson" },
                                ]}
                                client="Random client #1"
                                numberOfTasks="10"
                                completedTasks="8"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={3}>
                            <DefaultProjectCard
                                title="Test project #2"
                                description="A detailed description of the project"
                                startDate="13-Jul-2022"
                                endDate="15-Jul-2022"
                                expectedEndDate="15-Jul-2022"
                                authors={[
                                    { image: team1, name: "Elena Morison" },
                                    { image: team2, name: "Ryan Milly" },
                                    { image: team3, name: "Nick Daniel" },
                                    { image: team4, name: "Peterson" },
                                ]}
                                client="Random client #2"
                                numberOfTasks="20"
                                completedTasks="20"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={3}>
                            <DefaultProjectCard
                                title="Test project #3"
                                description="A detailed description of the project"
                                startDate="13-Jul-2022"
                                endDate="15-Jul-2022"
                                expectedEndDate="15-Jul-2022"
                                authors={[
                                    { image: team1, name: "Elena Morison" },
                                    { image: team2, name: "Ryan Milly" },
                                    { image: team3, name: "Nick Daniel" },
                                    { image: team4, name: "Peterson" },
                                ]}
                                client="Random client #3"
                                numberOfTasks="42"
                                completedTasks="8"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={3} onClick={handleToggleSideMenu} style={{cursor: 'pointer'}}>
                            <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
                        </Grid>
                        
                    </Grid>
                </SuiBox>
            </Card>
        </SuiBox>

        <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
