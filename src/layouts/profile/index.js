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

import { useNavigate } from "react-router-dom";
import React from "react";

function Overview() {

    return (
        <DashboardLayout>
        <Header />
        <SuiBox mt={5} mb={3}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={4}>
                <ProfileInfoCard
                title="profile information"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec porttitor ex. Praesent suscipit accumsan nibh, sit amet facilisis leo ornare vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                info={{
                    fullName: `firstName LastName`,
                    mobile: `06 000 000 00`,
                    email: `test@example.com`,
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
                <ProfilesList title="Team" profiles={profilesListData} />
            </Grid>
            </Grid>
        </SuiBox>

        <Footer />
        </DashboardLayout>
    );
}

export default Overview;
