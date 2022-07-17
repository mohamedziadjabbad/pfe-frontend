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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiButton from "components/SuiButton";
import { useSelector } from "react-redux";
import team3 from "../../../assets/images/team-3.jpg";

function ProfilesList({ title, profiles }) {
    const { teams } = useSelector((state) => state.user);
    const renderProfiles = teams.map((element) => (
        <SuiBox key={element.id} component="li" display="flex" alignItems="center" py={1} mb={1}>
            <SuiBox mr={2}>
                <SuiAvatar src={team3} alt="something here" variant="rounded" shadow="md" />
            </SuiBox>
            <SuiBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
            >
                <SuiTypography variant="button" fontWeight="medium">
                    {element.firstname + " " + element.lastname}
                </SuiTypography>
                <SuiTypography variant="caption" color="text">
                    {element.roles[0].name}
                </SuiTypography>
            </SuiBox>
            <SuiBox ml="auto">
                <SuiButton
                    component="a"
                    href="/dashboard"
                    target="_blank"
                    rel="noreferrer"
                    variant="text"
                    color="info"
                >
                    Reply
                </SuiButton>
            </SuiBox>
        </SuiBox>
    ));

    return (
        <Card sx={{ height: "100%" }}>
            <SuiBox pt={2} px={2}>
                <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    {title}
                </SuiTypography>
            </SuiBox>
            <SuiBox p={2}>
                <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    {renderProfiles}
                </SuiBox>
            </SuiBox>
        </Card>
    );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
    title: PropTypes.string.isRequired,
    profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
