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

// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";
import SuiInput from "components/SuiInput";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useSoftUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

return (
        <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
            <SuiBox
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                pt={3}
                pb={0.8}
                px={3}
            >
                <SuiBox>
                    <SuiTypography variant="h5">Create/Edit project</SuiTypography>
                    <SuiTypography variant="body2" color="text">
                        Fill the form bellow.
                    </SuiTypography>
                </SuiBox>

                <Icon
                sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
                    fontSize: `${size.md} !important`,
                    fontWeight: `${fontWeightBold} !important`,
                    stroke: dark.main,
                    strokeWidth: "2px",
                    cursor: "pointer",
                    mt: 2,
                })}
                onClick={handleCloseConfigurator}
                >
                close
                </Icon>
            </SuiBox>

            <Divider />

            <SuiBox pt={1.25} pb={3} px={3}>
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Title..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Description..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Start date..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Expected end date..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="End date..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Client..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Title..." />
                </SuiBox>    
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Total number of tasks..." />
                </SuiBox>    
                
                
                <Divider />

                <SuiBox mt={3} mb={2}>
                    <SuiBox mb={2}>
                        <SuiButton
                            component={Link}
                            href=""
                            color="dark"
                            variant="gradient"
                            fullWidth
                        >
                        Submit
                        </SuiButton>
                    </SuiBox>
                </SuiBox>
            </SuiBox>
        </ConfiguratorRoot>
    );
}

export default Configurator;