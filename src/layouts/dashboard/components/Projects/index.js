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
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";
// import React from "react";
import AddClient from "examples/SideMenu/AddClients";
import EditClient from "examples/SideMenu/EditClients";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient } from "stores/user";


function Projects() {
    const dispatch = useDispatch();
    const { clients } = useSelector((state) => state.user);
    const [sidePanel, setSidePanel] = React.useState(false);

    const [addClientSidePanel, setAddClientSidePanel] = React.useState(false)
    const [editClientSidePanel, setEditClientSidePanel] = React.useState(false)

    const { columns, rows } = data();
    const [menu, setMenu] = useState(null);

    const openMenu = ({ currentTarget }) => setMenu(currentTarget);
    const closeMenu = () => setMenu(null);

    const removeClient = (id) => {
        dispatch(deleteClient(id));
    };

    return (
        <Card>
            <SuiBox p={3}>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center">
                    <SuiTypography variant="h6" gutterBottom>
                        Clients
                    </SuiTypography>
                    <SuiButton
                        variant="outlined"
                        size="small"
                        color={"info"}
                        onClick={() => {setAddClientSidePanel(true)}}
                    >
                        Add Client
                    </SuiButton>
                </SuiBox>
                <SuiBox>
                    <SuiBox display="flex" alignItems="center" lineHeight={0}>
                        <Icon
                            sx={{
                                fontWeight: "bold",
                                color: ({ palette: { info } }) => info.main,
                                mt: -0.5,
                            }}
                        >
                            done
                        </Icon>
                        <SuiTypography variant="button" fontWeight="regular" color="text">
                            &nbsp;<strong>{clients?.length}</strong> clients
                        </SuiTypography>
                    </SuiBox>
                </SuiBox>
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
                    columns={[
                        { name: "name", align: "left" },
                        { name: "company", align: "left" },
                        { name: "phone", align: "left" },
                        { name: "action", align: "left" },
                    ]}
                    rows={clients?.map((element) => {
                        return {
                            name: element.nom,
                            company: element.company,
                            phone: element.phone,
                            action: (
                                <SuiBox display="flex" alignItems="right">
                                    <SuiButton
                                        to={""}
                                        variant="text"
                                        size="small"
                                        color={"info"}
                                        onClick={() => {setEditClientSidePanel(true)} }
                                    >
                                        Edit
                                    </SuiButton>
                                    <SuiButton
                                        to={""}
                                        variant="text"
                                        size="small"
                                        color={"error"}
                                        onClick={() => removeClient(element.id)}
                                    >
                                        Remove
                                    </SuiButton>
                                </SuiBox>
                            ),
                        };
                    })}
                />
            </SuiBox>
            <EditClient display={editClientSidePanel} setDisplay={setEditClientSidePanel} />
            <AddClient display={addClientSidePanel} setDisplay={setAddClientSidePanel} />
        </Card>
    );
}

export default Projects;
