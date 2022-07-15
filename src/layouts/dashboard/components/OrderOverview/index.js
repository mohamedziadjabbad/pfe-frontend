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

// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
            Categories
        </SuiTypography>
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
    </Card>
  );
}

export default OrdersOverview;
