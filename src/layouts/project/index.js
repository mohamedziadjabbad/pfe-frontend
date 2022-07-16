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

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import {Author, Function} from "layouts/tables/data/authorsTableData";
import {Completion, renderAuthors} from "layouts/tables/data/projectsTableData";

import AddUserToProject from "examples/SideMenu/AddUserToProject";
import AddEditTask from "examples/SideMenu/AddEditTask";
import AddTaskToProject from "examples/SideMenu/AddTaskToProject";

import React from "react";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const [userSidePanel, setUserSidePanel] = React.useState(false)
  const [taskSidePanel, setTaskSidePanel] = React.useState(false)
  const [newTaskSidePanel, setNewTaskSidePanel] = React.useState(false)

  return (
    <DashboardLayout>
        <DashboardNavbar />
        <SuiBox py={3}>
            <SuiBox mb={3}>
            <Card>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SuiTypography variant="h6">Assigned Users</SuiTypography>
                <SuiButton
                    onClick={ ()=>{setUserSidePanel(true)} }
                    variant="outlined"
                    size="small"
                    color={"info"}
                >
                    Add user to the project
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
                <Table columns={columns} rows={
                                        [
                        {
                            user: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
                            role: <Function job="Manager" org="Organization" />,
                            phone: (
                                <SuiTypography variant="caption" color="secondary" fontWeight="medium">
                                    +212-0625-125212
                                </SuiTypography>
                            ),
                            action: (
                                <SuiBox display="flex" flexDirection="row" gap="5px">
                                    {/* <SuiButton
                                        onClick={() => {setUserSidePanel(true)}}
                                        variant="text"
                                        size="small"
                                        color={"text"}
                                    >
                                        Edit
                                    </SuiButton> */}
                                    <SuiButton
                                        // onClick={}
                                        variant="text"
                                        size="small"
                                        color={"error"}
                                    >
                                        Remove
                                    </SuiButton>
                            </SuiBox>
                            ),
                        },  
                        ]
                    }/>
                </SuiBox>
            </Card>
            </SuiBox>
            <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SuiTypography variant="h6">Project Tasks</SuiTypography>
                <SuiButton
                    onClick={ ()=>{setTaskSidePanel(true)} }
                    variant="outlined"
                    size="small"
                    color={"info"}
                >
                    New Task
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
                <Table columns={prCols} rows={
                    [{
                        name: (
                          <SuiTypography variant="button" color="text" fontWeight="medium">
                            Test Task #1
                          </SuiTypography>
                        ),
                        members: (
                          <SuiBox display="flex">
                              {
                              renderAuthors(
                              [
                                  { image: team1, name: "Elena Morison" },
                                  { image: team2, name: "Ryan Milly" },
                                  { image: team3, name: "Nick Daniel" },
                                  { image: team4, name: "Peterson" },
                              ]
                              )
                              }
                          </SuiBox>
                        ),
                        priority: (
                          <SuiTypography variant="caption" color="text" fontWeight="medium">
                              HIGH
                          </SuiTypography>
                        ),
                        project: (
                          <SuiTypography variant="caption" color="text" fontWeight="medium">
                              project #1
                          </SuiTypography>
                        ),
                        status: (
                          <SuiTypography variant="caption" color="text" fontWeight="medium">
                              working
                          </SuiTypography>
                        ),
                        completion: <Completion value={60} color="info" />,
                        Deadline: (
                          <SuiTypography variant="caption" color="text" fontWeight="medium">
                            18-Jul-2022
                          </SuiTypography>
                        ),
                        actions: (
                          <SuiTypography variant="caption" color="text" fontWeight="medium">
                              <SuiBox display="flex" flexDirection="row" gap="5px">
                                  <SuiButton
                                      onClick={() =>{setNewTaskSidePanel(true)}}
                                      variant="text"
                                      size="small"
                                      color={"text"}
                                  >
                                      Edit
                                  </SuiButton>
                                  <SuiButton
                                      // onClick={}
                                      variant="text"
                                      size="small"
                                      color={"error"}
                                  >
                                      Remove
                                  </SuiButton>
                              </SuiBox>
                          </SuiTypography>
                        ),
                  
                      },]

                } controller={setTaskSidePanel}/>
            </SuiBox>
            </Card>
        </SuiBox>

        <AddUserToProject display={userSidePanel} setDisplay={setUserSidePanel}/>
        <AddTaskToProject display={taskSidePanel} setDisplay={setTaskSidePanel}/>
        <AddEditTask display={newTaskSidePanel} setDisplay={setNewTaskSidePanel}/>
    <Footer />
    </DashboardLayout>
  );
}

export default Tables;
