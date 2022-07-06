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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function SignUp() {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	// run checks in here
	function handleSetUsername(event){
		setUsername(event.target.value);
	}
	function handleSetPassword(event){
		setPassword(event.target.value);
	}
	function handleSetFirstName(event){
		setFirstName(event.target.value);
	}
	function handleSetLastName(event){
		setLastName(event.target.value);
	}
	function handleSetPhoneNumber(event){
		setPhoneNumber(event.target.value);
	}
	function handleSetEmail(event){
		setEmail(event.target.value);
	}

	function submitForm(){
		
	}

  	return (
		<BasicLayout
			title="Welcome!"
			description="Create an account to enjoy all the features our service provides"
			image={curved6}
		>
      	<Card>
			<SuiBox p={3} mb={1} textAlign="center">
				<SuiTypography variant="h5" fontWeight="medium">
					Register
				</SuiTypography>
			</SuiBox>
        <SuiBox pt={2} pb={3} px={3}>
			<SuiBox component="form" role="form">
				<SuiBox mb={2}>
					<SuiInput placeholder="Username" value={username} onChange={handleSetUsername}/>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiInput type="password" placeholder="Password" value={password} onChange={handleSetPassword}/>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiInput type="text" placeholder="First Name" value={firstName} onChange={handleSetFirstName}/>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiInput type="text" placeholder="Last Name" value={lastName} onChange={handleSetLastName}/>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiInput type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleSetPhoneNumber}/>
				</SuiBox>
				<SuiBox mb={2}>
					<SuiInput type="email" placeholder="Email" value={email} onChange={handleSetEmail}/>
				</SuiBox>
				<SuiBox mt={4} mb={1}>
					<SuiButton variant="gradient" color="dark" fullWidth onClick={submitForm}>
						sign up
					</SuiButton>
				</SuiBox>
					<SuiBox mt={3} textAlign="center">
						<SuiTypography variant="button" color="text" fontWeight="regular">
								Already have an account?&nbsp;
								<SuiTypography
									component={Link}
									to="/authentication/sign-in"
									variant="button"
									color="dark"
									fontWeight="bold"
									textGradient
									>
									Sign in
								</SuiTypography>
						</SuiTypography>
					</SuiBox>
          		</SuiBox>
        	</SuiBox>
      	</Card>
    </BasicLayout>
  );
}

export default SignUp;
