
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import React from "react";
import ConfiguratorRoot from "examples/SideMenu/ConfiguratorRoot";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
           
const AddUserToProject = ({display, setDisplay}) => {

    return ( 
        <ConfiguratorRoot variant="permanent" ownerState={ display }>
            <SuiBox
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                pt={3}
                pb={0.8}
                px={3}
            >
                <SuiBox>
                    <SuiTypography variant="h5">Add a user to the project</SuiTypography>
                    <SuiTypography variant="body2" color="text">
                        Choose a user from the menu below
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
                onClick={()=>setDisplay(false)}
                >
                close
                </Icon>
            </SuiBox>

            <Divider />

            <SuiBox pt={1.25} pb={3} px={3}>
                <Dropdown 
                    style={{borderRadius: '50px'}}
                    options={[
                        <SuiTypography variant="caption" color="text" fontWeight="medium">user #1</SuiTypography>,
                        <SuiTypography variant="caption" color="text" fontWeight="medium">user #2</SuiTypography>,
                        <SuiTypography variant="caption" color="text" fontWeight="medium">user #3</SuiTypography>,
                    ]} 
                    value={""} 
                    placeholder={<SuiTypography variant="caption" color="text" fontWeight="medium">User</SuiTypography>}
                />

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
 
export default AddUserToProject;            
            