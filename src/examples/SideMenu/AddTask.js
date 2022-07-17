import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

import React, { useEffect, useState } from "react";
import ConfiguratorRoot from "examples/SideMenu/ConfiguratorRoot";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getStatus, createTask } from "stores/user";

const AddTask = ({ display, setDisplay }) => {
    // const [isVisible, setIsVisible] = React.useState(false);
    const dispatch = useDispatch();
    const { status, periority, projects } = useSelector((state) => state.user);

    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [startdate, setStartdate] = useState("");
    const [enddate, setEnddate] = useState("");
    const [description, setDescription] = useState("");
    const [perior, setPerior] = useState("");
    const [project, setProject] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        dispatch(getStatus());
    }, []);

    const addTask = (e) => {
        e.preventDefault();
        // console.log({ name, deadline, perior, description, project, state, startdate, enddate });
        if (name || deadline || perior || project || state || startdate || enddate || description) {
            dispatch(
                createTask({
                    name,
                    deadline,
                    perior,
                    description,
                    project,
                    state,
                    startdate,
                    enddate,
                })
            );
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
                    <SuiTypography variant="h5">Create task</SuiTypography>
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
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </SuiBox>

                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Start date"
                        value={startdate}
                        onChange={(e) => setStartdate(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="End date"
                        value={enddate}
                        onChange={(e) => setEnddate(e.target.value)}
                    />
                </SuiBox>
                <SuiBox mt={3} mb={2}>
                    <SuiInput
                        placeholder="Deadline"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </SuiBox>

                <Divider />

                <SuiBox>
                    <Dropdown
                        style={{ borderRadius: "50px" }}
                        options={periority?.map((element) => (
                            <SuiTypography
                                variant="caption"
                                color="text"
                                fontWeight="medium"
                                value={element.id}
                                key={element.id}
                            >
                                {element.designation}
                            </SuiTypography>
                        ))}
                        value={""}
                        onChange={(prev) => setPerior(prev.value.props.value)}
                        placeholder={
                            <SuiTypography variant="caption" color="text" fontWeight="medium">
                                Priority
                            </SuiTypography>
                        }
                    />
                </SuiBox>
                <br />
                <SuiBox>
                    <Dropdown
                        style={{ borderRadius: "50px" }}
                        options={projects?.map((element) => (
                            <SuiTypography
                                variant="caption"
                                color="text"
                                fontWeight="medium"
                                value={element.id}
                                key={element.id}
                            >
                                {element.name}
                            </SuiTypography>
                        ))}
                        value={""}
                        onChange={(prev) => setProject(prev.value.props.value)}
                        placeholder={
                            <SuiTypography variant="caption" color="text" fontWeight="medium">
                                Project
                            </SuiTypography>
                        }
                    />
                </SuiBox>
                <br />
                <SuiBox>
                    <Dropdown
                        style={{ borderRadius: "50px" }}
                        options={status?.map((element) => (
                            <SuiTypography
                                variant="caption"
                                color="text"
                                fontWeight="medium"
                                key={element.id}
                                value={element.id}
                            >
                                {element.designation}
                            </SuiTypography>
                        ))}
                        value={""}
                        onChange={(prev) => setState(prev.value.props.value)}
                        placeholder={
                            <SuiTypography variant="caption" color="text" fontWeight="medium">
                                Status
                            </SuiTypography>
                        }
                    />
                </SuiBox>

                <Divider />

                <SuiBox mt={3} mb={2}>
                    <SuiBox mb={2}>
                        <SuiButton
                            onClick={addTask}
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

export default AddTask;
