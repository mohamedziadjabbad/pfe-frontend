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
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import React from "react";

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

import AddCategory from "examples/SideMenu/AddCategories";
import EditCategory from "examples/SideMenu/EditCategories";

function OrdersOverview() {

    const [addCategorySidePanel, setAddCategorySidePanel] = React.useState(false)
    const [editCategorySidePanel, setEditCategorySidePanel] = React.useState(false)

  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center">
            <SuiTypography variant="h6" gutterBottom>
                Categories
            </SuiTypography>
            <SuiButton
                variant="outlined"
                size="small"
                color={"info"}
                onClick={ ()=>{setAddCategorySidePanel(true)} }
                >
                Add Category
            </SuiButton>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <TimelineItem
            title="Category #1"
            dateTime={
                <SuiBox display="flex" alignItems="right">
                    <SuiButton
                        to={""}
                        variant="text"
                        size="small"
                        color={"info"}
                        onClick={ ()=>{setAddCategorySidePanel(true)} }
                    >
                        Edit
                    </SuiButton>
                    <SuiButton
                        to={""}
                        variant="text"
                        size="small"
                        color={"error"}
                    >
                        Remove
                    </SuiButton>
                </SuiBox>
            }
        />
        <TimelineItem
            title="Category #2"
            dateTime={
                <SuiBox display="flex" alignItems="right">
                    <SuiButton
                        to={""}
                        variant="text"
                        size="small"
                        color={"info"}
                        onClick={ ()=>{setAddCategorySidePanel(true)} }
                    >
                        Edit
                    </SuiButton>
                    <SuiButton
                        to={""}
                        variant="text"
                        size="small"
                        color={"error"}
                    >
                        Remove
                    </SuiButton>
                </SuiBox>
            }
        />
        <TimelineItem
            title="Category #3"
            dateTime={
                <SuiBox display="flex" alignItems="right">
                    <SuiButton
                        to={""}
                        variant="text"
                        size="small"
                        color={"info"}
                        onClick={ ()=>{setEditCategorySidePanel(true)} }
                    >
                        Edit
                    </SuiButton>
                    <SuiButton
                        to={""}
                        variant="text"
                        size="small"
                        color={"error"}
                    >
                        Remove
                    </SuiButton>
                </SuiBox>
            }
        />
      </SuiBox>
      <AddCategory display={addCategorySidePanel} setDisplay={setAddCategorySidePanel}/>
      <EditCategory display={editCategorySidePanel} setDisplay={setEditCategorySidePanel}/>
    </Card>
  );
}

export default OrdersOverview;
