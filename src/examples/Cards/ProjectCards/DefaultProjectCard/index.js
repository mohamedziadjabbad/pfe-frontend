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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes, { number } from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiAvatar from "components/SuiAvatar";

import SuiProgress from "components/SuiProgress";

function DefaultProjectCard({ title, description, startDate, endDate, expectedEndDate, authors, client, numberOfTasks, completedTasks }) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SuiAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        // borderColor: "black",
        // borderWidth: "1px",
        // padding: "5px",
        // borderRadius: "5px",
    }}
    >


    <SuiBox pt={3} px={0.5}>
        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
                <h3>{title}</h3> <br />
                <i>{description}</i>
            </SuiTypography>
        </SuiBox>

        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
                <ul style={{listStyle:"none"}}>
                    <li>Start date: {startDate}</li>
                    <li>Expected End Date: {expectedEndDate}</li>
                    <li>End date: {endDate}</li>
                    <li>Client: {client}</li>
                </ul>
            </SuiTypography>
        </SuiBox>

        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
                <ul style={{listStyle:"none"}}>
                    <li>Number of tasks: {numberOfTasks}</li>
                    <li>Completed tasks: {completedTasks}</li>
                    <li>
                        <br />
                        <SuiProgress 
                            value={(completedTasks / numberOfTasks) * 100} 
                            color={ completedTasks == numberOfTasks ? "success" : "info"} 
                            variant="gradient" 
                            label={false} />
                    </li>
                </ul>
            </SuiTypography>
        </SuiBox>

        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text" display="flex" justifyContent="space-between" alignItems="center">
                Team:
                <SuiBox display="flex">{renderAuthors}</SuiBox>
            </SuiTypography>
        </SuiBox>

        <SuiBox display="flex" justifyContent="space-between" alignItems="center">
            <SuiButton
                component={Link}
                to={""}
                variant="outlined"
                size="small"
                color={"info"}
            >
                Edit
            </SuiButton>
            <SuiButton
                component={Link}
                to={""}
                variant="outlined"
                size="small"
                color={"error"}
            >
                Remove
            </SuiButton>
        </SuiBox>
            
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }),
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
