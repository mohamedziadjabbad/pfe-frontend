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
/* eslint-disable */

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// HTTP module
import { HTTPpost } from "usables/EasyHTTP";
import ENVIRONMENT_VARIABLES from "usables/ENVIRONMENT_VARIABLES.json";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        HTTPpost(
            `${ENVIRONMENT_VARIABLES.url}/users/signin`,
            {
                "username": username,
                "password": password
            }).then(data => {
                console.log(data);   
            })
    }

    return (
        <CoverLayout
        title="Welcome back"
        description="Enter your email and password to sign in"
        image={curved9}
        >
        <SuiBox component="form" role="form">
            <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
                <SuiTypography component="label" variant="caption" fontWeight="bold">
                Username
                </SuiTypography>
            </SuiBox>
            <SuiInput type="username" placeholder="Username" value={username} onChange={handleUsernameChange} />
            </SuiBox>
            <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
                <SuiTypography component="label" variant="caption" fontWeight="bold">
                Password
                </SuiTypography>
            </SuiBox>
            <SuiInput type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            </SuiBox>

            <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign in
            </SuiButton>
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
            <SuiTypography variant="button" color="text" fontWeight="regular">
                Don&apos;t have an account?{" "}
                <SuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
                >
                Sign up
                </SuiTypography>
            </SuiTypography>
            </SuiBox>
        </SuiBox>
        </CoverLayout>
    );
}

export default SignIn;
