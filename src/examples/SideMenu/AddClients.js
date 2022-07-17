import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import React, { useState } from "react";
import ConfiguratorRoot from "examples/SideMenu/ConfiguratorRoot";
import { useDispatch } from "react-redux";
import { createClient } from "../../stores/user";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddClient = ({ display, setDisplay }) => {
    // const [isVisible, setIsVisible] = React.useState(false);

    const dispatch = useDispatch();
    const [nom, setNom] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [err, setErr] = useState("");

    const addClient = (e) => {
        e.preventDefault();
        if (nom || company || phone) {
            setErr("");
            dispatch(createClient({ nom, company, phone }));
            setNom("");
            setCompany("");
            setPhone("");
        } else {
            setErr("please Complete the form");
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
                    <SuiInput
                        placeholder="Name..."
                        onChange={(e) => setNom(e.target.value)}
                        value={nom}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Company..."
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Phone..."
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </SuiBox>
                {err && <div style={{ color: "red" }}>{err}</div>}

                <Divider />

                <SuiBox mt={3} mb={2}>
                    <SuiBox mb={2}>
                        <SuiButton
                            onClick={addClient}
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

export default AddClient;
