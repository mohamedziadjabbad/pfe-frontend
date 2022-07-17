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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import AddUser from "examples/SideMenu/AddUser";
import EditUser from "examples/SideMenu/EditUser";
import AddTask from "examples/SideMenu/AddTask";
import EditTask from "examples/SideMenu/EditTask";

import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { Author, Function } from "layouts/tables/data/authorsTableData";
import { Completion, renderAuthors } from "layouts/tables/data/projectsTableData";


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getTasks, getRoles, deleteUser } from "stores/user";
import { useNavigate } from "react-router-dom";

function Tables() {
    const disptach = useDispatch();
    const [addUserSidePanel, setAddUserSidePanel] = React.useState(false);
    const [editUserSidePanel, setEditUserSidePanel] = React.useState(false);
    const [addTaskSidePanel, setAddTaskSidePanel] = React.useState(false);
    const [editTaskSidePanel, setEditTaskSidePanel] = useState([]);

    const [userData, setUserData] = useState([]);

    const navigation = useNavigate();

    // const { users } = useSelector((state) => state.user);
    const { users, isLogged } = useSelector((state) => state.user);

    const { columns, rows } = authorsTableData;
    const { columns: prCols, rows: prRows } = projectsTableData;

    useEffect(() => {
        disptach(getUsers());
        disptach(getTasks());
        disptach(getRoles());
    }, []);

    useEffect(() => {
        setUserData(
            users?.map((element) => ({
                user: (
                    <Author
                        image={team2}
                        name={`${element.firstname} ${element.lastname}`}
                        email={element.email}
                    />
                ),
                role: <Function job={element.roles[0].name} org="" />,
                phone: (
                    <SuiTypography variant="caption" color="secondary" fontWeight="medium">
                        {element.phone}
                    </SuiTypography>
                ),
                action: (
                    <SuiBox display="flex" flexDirection="row" gap="5px">
                        <SuiButton
                            onClick={() => {
                                setEditUserSidePanel(true);
                            }}
                            variant="text"
                            size="small"
                            color={"text"}
                        >
                            Edit
                        </SuiButton>
                        <SuiButton
                            onClick={() => deleteUserByid(element.id)}
                            variant="text"
                            size="small"
                            color={"error"}
                        >
                            Remove
                        </SuiButton>
                    </SuiBox>
                ),
            }))
        );

        if (!isLogged) {
            navigation("/authentication/sign-in");
        }
    }, [users, isLogged]);

    const deleteUserByid = (id) => {
        disptach(deleteUser(id));
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox py={3}>
                <SuiBox mb={3}>
                    <Card>
                        <SuiBox
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={3}
                        >
                            <SuiTypography variant="h6">Users</SuiTypography>
                            <SuiButton
                                onClick={() => {
                                    setAddUserSidePanel(true);
                                }}
                                variant="outlined"
                                size="small"
                                color={"info"}
                            >
                                Add user
                            </SuiButton>
                        </SuiBox>
                        <SuiBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <Table columns={columns} rows={userData} />
                        </SuiBox>
                    </Card>
                </SuiBox>
                <Card>
                    <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                        <SuiTypography variant="h6">Tasks</SuiTypography>
                        <SuiButton
                            onClick={() => {
                                setAddTaskSidePanel(true);
                            }}
                            variant="outlined"
                            size="small"
                            color={"info"}
                        >
                            Add Task
                        </SuiButton>
                    </SuiBox>
                    <SuiBox
                        sx={{
                            "& .MuiTableRow-root:not(:last-child)": {
                                "& td": {
                                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                        `${borderWidth[1]} solid ${borderColor}`,
                                },
                            },
                        }}
                    >
                        <Table
                            columns={prCols}
                            rows={[
                                {
                                    name: (
                                        <SuiTypography
                                            variant="button"
                                            color="text"
                                            fontWeight="medium"
                                        >
                                            Test Task #1
                                        </SuiTypography>
                                    ),
                                    members: (
                                        <SuiBox display="flex">
                                            {renderAuthors([
                                                { image: team1, name: "Elena Morison" },
                                                { image: team2, name: "Ryan Milly" },
                                                { image: team3, name: "Nick Daniel" },
                                                { image: team4, name: "Peterson" },
                                            ])}
                                        </SuiBox>
                                    ),
                                    priority: (
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                            fontWeight="medium"
                                        >
                                            HIGH
                                        </SuiTypography>
                                    ),
                                    project: (
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                            fontWeight="medium"
                                        >
                                            project #1
                                        </SuiTypography>
                                    ),
                                    status: (
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                            fontWeight="medium"
                                        >
                                            working
                                        </SuiTypography>
                                    ),
                                    completion: <Completion value={60} color="info" />,
                                    Deadline: (
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                            fontWeight="medium"
                                        >
                                            18-Jul-2022
                                        </SuiTypography>
                                    ),
                                    actions: (
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                            fontWeight="medium"
                                        >
                                            <SuiBox display="flex" flexDirection="row" gap="5px">
                                                <SuiButton
                                                    onClick={() => {
                                                        setEditTaskSidePanel(true);
                                                    }}
                                                    variant="text"
                                                    size="small"
                                                    color={"text"}
                                                >
                                                    Edit
                                                </SuiButton>
                                                <SuiButton
                                                    onClick={() => {
                                                        
                                                    }}
                                                    variant="text"
                                                    size="small"
                                                    color={"error"}
                                                >
                                                    Remove
                                                </SuiButton>
                                            </SuiBox>
                                        </SuiTypography>
                                    ),
                                },
                            ]}
                        />
                    </SuiBox>
                </Card>
            </SuiBox>

            <AddUser display={addUserSidePanel} setDisplay={setAddUserSidePanel} />
            <EditUser display={editUserSidePanel} setDisplay={setEditUserSidePanel} />
            <AddTask display={addTaskSidePanel} setDisplay={setAddTaskSidePanel} />
            <EditTask display={editTaskSidePanel} setDisplay={setEditTaskSidePanel} />
            <Footer />
        </DashboardLayout>
    );
}

export default Tables;
