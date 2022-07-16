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

import { Link, useNavigate } from "react-router-dom";


function DefaultProjectCard({ title, description, startDate, endDate, expectedEndDate, authors, client, numberOfTasks, completedTasks, action }) {
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

    const navigation = useNavigate();
    const redirectToProjectPage = () => {
        navigation("/project");
    }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        cursor: "pointer",
    }}
    >


    <SuiBox pt={3} px={0.5} onClick={redirectToProjectPage}>
        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
                <h3 color="info">{title}</h3> <br />
                <i>{description}</i>
            </SuiTypography>
        </SuiBox>

        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
                <ul style={{listStyle:"none"}}>
                    <li><strong>Start date: </strong> {startDate}</li>
                    <li><strong>Expected End Date: </strong>{expectedEndDate}</li>
                    <li><strong>End date: </strong>{endDate}</li>
                    <li><strong>Client: </strong>{client}</li>
                </ul>
            </SuiTypography>
        </SuiBox>

        <SuiBox mb={3} lineHeight={0}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
                <ul style={{listStyle:"none"}}>
                    <li><strong>Number of tasks: </strong>{numberOfTasks}</li>
                    <li><strong>Completed tasks: </strong>{completedTasks}</li>
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
            <SuiTypography variant="button" fontWeight="medium" color="text" display="flex" justifyContent="space-between" alignItems="center">
                Team:
                <SuiBox display="flex">{renderAuthors}</SuiBox>
            </SuiTypography>
        </SuiBox>


            {action}
            
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
