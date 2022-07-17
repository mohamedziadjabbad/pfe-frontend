import { useState, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// State Hooks
import { useDispatch, useSelector } from "react-redux";

// Actions
import { userAuthentication } from "../../../stores/user";

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
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { userNotFound, isLogged } = useSelector((state) => state.user);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        if (isLogged) {
            navigation("/dashboard");
        }
    }, [isLogged]);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (username && password) {
            setError("");
            dispatch(userAuthentication({ username, password }));
        } else {
            setError("Please complete the form!");
        }
    }

    return (
        <CoverLayout title="Welcome back" image={curved9}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {userNotFound && (
                <p style={{ color: "red" }}>We didn't find a user with these credentials</p>
            )}

            <SuiBox component="form" role="form">
                <SuiBox mb={2}>
                    <SuiBox mb={1} ml={0.5}>
                        <SuiTypography component="label" variant="caption" fontWeight="bold">
                            Username
                        </SuiTypography>
                    </SuiBox>
                    <SuiInput
                        type="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </SuiBox>
                <SuiBox mb={2}>
                    <SuiBox mb={1} ml={0.5}>
                        <SuiTypography component="label" variant="caption" fontWeight="bold">
                            Password
                        </SuiTypography>
                    </SuiBox>
                    <SuiInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </SuiBox>

                <SuiBox mt={4} mb={1}>
                    <SuiButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                        sign in
                    </SuiButton>
                </SuiBox>
            </SuiBox>
        </CoverLayout>
    );
}

export default SignIn;
