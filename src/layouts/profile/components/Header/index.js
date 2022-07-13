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

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";

import ENVIRONMENT_VARIABLES from "usables/ENVIRONMENT_VARIABLES.json";

import { CheckSession } from "usables/checkSession";
import { useNavigate } from "react-router-dom";

function Header() {
    // CheckSession(useNavigate(), ENVIRONMENT_VARIABLES);
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);

useEffect(() => {
// A function that sets the orientation state of the tabs.
function handleTabsOrientation() {
    return window.innerWidth < breakpoints.values.sm
    ? setTabsOrientation("vertical")
    : setTabsOrientation("horizontal");
}

/** 
 The event listener that's calling the handleTabsOrientation function when resizing the window.
*/
window.addEventListener("resize", handleTabsOrientation);

// Call the handleTabsOrientation function to set the state with the initial value.
handleTabsOrientation();

// Remove event listener on cleanup
return () => window.removeEventListener("resize", handleTabsOrientation);
}, [tabsOrientation]);

const handleSetTabValue = (event, newValue) => setTabValue(newValue);

return (
<SuiBox position="relative">
    <DashboardNavbar absolute light />
    <SuiBox
    display="flex"
    alignItems="center"
    position="relative"
    minHeight="18.75rem"
    borderRadius="xl"
    sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
        `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
        )}, url(${curved0})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        overflow: "hidden",
    }}
    />
    <Card
    sx={{
        backdropFilter: `saturate(200%) blur(30px)`,
        backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
        boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
        position: "relative",
        mt: -8,
        mx: 3,
        py: 2,
        px: 2,
    }}
    >
    <Grid container spacing={3} alignItems="center">
        <Grid item>
        <SuiAvatar
            src={burceMars}
            alt="profile-image"
            variant="rounded"
            size="xl"
            shadow="sm"
        />
        </Grid>
        <Grid item>
        <SuiBox height="100%" mt={0.5} lineHeight={1}>
            <SuiTypography variant="h5" fontWeight="medium">
            FirstName LastName
            </SuiTypography>
            Example Role
        </SuiBox>
        </Grid>
    </Grid>
    </Card>
</SuiBox>
);
}

export default Header;
