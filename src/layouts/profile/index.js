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
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// user data
import ENVIRONMENT_VARIABLES from "usables/ENVIRONMENT_VARIABLES.json";
import { CheckSession } from "usables/checkSession";
import { useNavigate } from "react-router-dom";
import { HTTPget } from "usables/EasyHTTP";
import React from "react";

function Overview() {
    // CheckSession(useNavigate(), ENVIRONMENT_VARIABLES);
    const [clients, setClients] = React.useState([]);

    // React.useEffect(() => {
    //     HTTPget(
    //         `${ENVIRONMENT_VARIABLES.url}/clients`,
    //         ENVIRONMENT_VARIABLES.session.token
    //     ).then( data => {
    //         console.log(data);
    //     })
    // })

    return (
        <DashboardLayout>
        <Header />
        <SuiBox mt={5} mb={3}>
            <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} xl={4}>
                <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={4}>
                <ProfileInfoCard
                title="profile information"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec porttitor ex. Praesent suscipit accumsan nibh, sit amet facilisis leo ornare vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                info={{
                    fullName: `${ENVIRONMENT_VARIABLES.session.firstName} ${ENVIRONMENT_VARIABLES.session.lastName}`,
                    mobile: `${ENVIRONMENT_VARIABLES.session.phone}`,
                    email: `${ENVIRONMENT_VARIABLES.session.mail}`,
                }}
                social={[
                    {
                    link: "https://www.facebook.com/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                    },
                    {
                    link: "https://twitter.com/",
                    icon: <TwitterIcon />,
                    color: "twitter",
                    },
                    {
                    link: "https://www.instagram.com/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                    },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                />
            </Grid>
            <Grid item xs={12} xl={true}>
                <ProfilesList title="Clients" profiles={profilesListData} />
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
                    Architects design houses
                </SuiTypography>
                </SuiBox>
            </SuiBox>
            <SuiBox p={2}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                    image={homeDecor1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "view project",
                    }}
                    authors={[
                        { image: team1, name: "Elena Morison" },
                        { image: team2, name: "Ryan Milly" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                    ]}
                    />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                    image={homeDecor2}
                    label="project #1"
                    title="scandinavian"
                    description="Music is something that every person has his or her own specific opinion about."
                    action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "view project",
                    }}
                    authors={[
                        { image: team3, name: "Nick Daniel" },
                        { image: team4, name: "Peterson" },
                        { image: team1, name: "Elena Morison" },
                        { image: team2, name: "Ryan Milly" },
                    ]}
                    />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                    image={homeDecor3}
                    label="project #3"
                    title="minimalist"
                    description="Different people have different taste, and various types of music."
                    action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "view project",
                    }}
                    authors={[
                        { image: team4, name: "Peterson" },
                        { image: team3, name: "Nick Daniel" },
                        { image: team2, name: "Ryan Milly" },
                        { image: team1, name: "Elena Morison" },
                    ]}
                    />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
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

export default Overview;
