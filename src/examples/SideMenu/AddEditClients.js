import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import React from "react";
import ConfiguratorRoot from "examples/SideMenu/ConfiguratorRoot";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddEditClient = ({ display, setDisplay }) => {
    // const [isVisible, setIsVisible] = React.useState(false);

    return (
        <ConfiguratorRoot variant="permanent" ownerState={display}>
            <SuiBox
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                pt={3}
                pb={0.8}
                px={3}
            >
                <SuiBox>
                    <SuiTypography variant="h5">Create Client</SuiTypography>
                    <SuiTypography variant="body2" color="text">
                        Fill the form below.
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
                    onClick={() => setDisplay(false)}
                >
                    close
                </Icon>
            </SuiBox>

            <Divider />

            <SuiBox pt={1.25} pb={3} px={3}>
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Name..." />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Company..." />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput placeholder="Phone..." />
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
};

export default AddEditClient;
