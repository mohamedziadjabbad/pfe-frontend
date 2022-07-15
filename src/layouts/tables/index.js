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

import AddEditUser from "examples/SideMenu/AddEditUser";
import AddEditTask from "examples/SideMenu/AddEditTask";

import React from "react";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const [userSidePanel, setUserSidePanel] = React.useState(false)
  const [taskSidePanel, setTaskSidePanel] = React.useState(false)

  return (
    <DashboardLayout>
        <DashboardNavbar />
        <SuiBox py={3}>
            <SuiBox mb={3}>
            <Card>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SuiTypography variant="h6">Users</SuiTypography>
                <SuiButton
                    onClick={ ()=>{setUserSidePanel(true)} }
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
                <Table columns={columns} rows={rows} controller={setUserSidePanel}/>
                </SuiBox>
            </Card>
            </SuiBox>
            <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SuiTypography variant="h6">Tasks</SuiTypography>
                <SuiButton
                    onClick={ ()=>{setTaskSidePanel(true)} }
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
                <Table columns={prCols} rows={prRows} controller={setTaskSidePanel}/>
            </SuiBox>
            </Card>
        </SuiBox>

        <AddEditUser display={userSidePanel} setDisplay={setUserSidePanel}/>
        <AddEditTask display={taskSidePanel} setDisplay={setTaskSidePanel}/>
    <Footer />
    </DashboardLayout>
  );
}

export default Tables;
