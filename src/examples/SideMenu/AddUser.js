import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ConfiguratorRoot from "examples/SideMenu/ConfiguratorRoot";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { createUser, getRoles } from "stores/user";

const AddUser = ({ display, setDisplay }) => {
    const dispatch = useDispatch();
    const { token, roles } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getRoles());
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [err, setErr] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (username || password || firstname || lastname || phone || email || role) {
            setErr("");
            dispatch(createUser({ username, password, firstname, lastname, phone, email, role }));
            setUsername("");
            setPassword("");
            setFirstname("");
            setLastname("");
            setPhone("");
            setEmail("");
            setRole("");
        } else {
            setErr("s'il vous plaít completez le formulaire");
        }
    };

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
                    <SuiTypography variant="h5">Create user</SuiTypography>
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
                    <SuiInput
                        placeholder="Username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        type="password"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="First Name..."
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Last Name..."
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Phone..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </SuiBox>
                <Dropdown
                    style={{ borderRadius: "50px" }}
                    options={roles?.map((element) => {
                        return (
                            <SuiTypography
                                variant="caption"
                                color="text"
                                fontWeight="medium"
                                key={element.name}
                                value={element.id}
                            >
                                {element.name}
                            </SuiTypography>
                        );
                    })}
                    // value={role}
                    onChange={(prev) => setRole(prev.value.props.value)}
                    placeholder={
                        <SuiTypography variant="caption" color="text" fontWeight="medium">
                            Role
                        </SuiTypography>
                    }
                />

                <Divider />
                {err && <div style={{ color: "red" }}>{err}</div>}
                <SuiBox mt={3} mb={2}>
                    <SuiBox mb={2}>
                        <SuiButton
                            onClick={submit}
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

export default AddUser;
