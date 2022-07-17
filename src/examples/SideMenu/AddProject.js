import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import React, { useState, useEffect } from "react";
import ConfiguratorRoot from "examples/SideMenu/ConfiguratorRoot";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "stores/user";
import { createProject } from "stores/user";

const AddProject = ({ display, setDisplay }) => {
    // const [isVisible, setIsVisible] = React.useState(false);
    const dispatch = useDispatch();
    const { status, clients, categories } = useSelector((state) => state.user);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
    const [expectedend, setExpectedend] = useState("");
    const [client, setClient] = useState("");
    const [state, setState] = useState("");
    const [category, setCategory] = useState("");
    const [err, setErr] = useState("");

    useEffect(() => {
        dispatch(getStatus());
    }, []);

    const addProject = (e) => {
        e.preventDefault();
        if (
            name ||
            description ||
            startdate ||
            enddate ||
            expectedend ||
            client ||
            state ||
            category
        ) {
            setErr("");
            dispatch(
                createProject({
                    name,
                    description,
                    startdate,
                    enddate,
                    expectedend,
                    client,
                    state,
                    category,
                })
            );
            setName("");
            setDescription("");
            setStartdate("");
            setEnddate("");
            setExpectedend("");
            setClient("");
            setState("");
            setCategory("");
        } else {
            setErr("please complete the form");
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
                    <SuiTypography variant="h5">Create Project</SuiTypography>
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
                        placeholder="Title..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Description..."
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Start date..."
                        onChange={(e) => setStartdate(e.target.value)}
                        value={startdate}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="End date..."
                        onChange={(e) => setEnddate(e.target.value)}
                        value={enddate}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Expected end date..."
                        onChange={(e) => setExpectedend(e.target.value)}
                        value={expectedend}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiBox mt={3} mb={2}>
                        <Dropdown
                            style={{ borderRadius: "50px" }}
                            options={clients?.map((element) => (
                                <SuiTypography
                                    variant="caption"
                                    color="text"
                                    fontWeight="medium"
                                    value={element.id}
                                >
                                    {element.nom}
                                </SuiTypography>
                            ))}
                            onChange={(prev) => setClient(prev.value.props.value)}
                            placeholder={
                                <SuiTypography variant="caption" color="text" fontWeight="medium">
                                    Clients
                                </SuiTypography>
                            }
                        />
                    </SuiBox>
                    <SuiBox mt={3} mb={2}>
                        <Dropdown
                            style={{ borderRadius: "50px" }}
                            options={categories?.map((element) => (
                                <SuiTypography
                                    variant="caption"
                                    color="text"
                                    fontWeight="medium"
                                    value={element.id}
                                >
                                    {element.designation}
                                </SuiTypography>
                            ))}
                            onChange={(prev) => setCategory(prev.value.props.value)}
                            placeholder={
                                <SuiTypography variant="caption" color="text" fontWeight="medium">
                                    Category
                                </SuiTypography>
                            }
                        />
                    </SuiBox>
                    <SuiBox mt={3} mb={2}>
                        <Dropdown
                            style={{ borderRadius: "50px" }}
                            options={status?.map((element) => (
                                <SuiTypography
                                    variant="caption"
                                    color="text"
                                    fontWeight="medium"
                                    value={element.id}
                                >
                                    {element.designation}
                                </SuiTypography>
                            ))}
                            onChange={(prev) => setState(prev.value.props.value)}
                            placeholder={
                                <SuiTypography variant="caption" color="text" fontWeight="medium">
                                    Status
                                </SuiTypography>
                            }
                        />
                    </SuiBox>
                    {err && <div style={{ color: "red" }}>{err}</div>}
                    <Divider />

                    <SuiBox mt={3} mb={2}>
                        <SuiBox mb={2}>
                            <SuiButton
                                onClick={addProject}
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
            </SuiBox>
        </ConfiguratorRoot>
    );
};

export default AddProject;
