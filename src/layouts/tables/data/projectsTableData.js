/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";
import Tooltip from "@mui/material/Tooltip";
import SuiAvatar from "components/SuiAvatar";
import SuiButton from "components/SuiButton";

import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

export const renderAuthors = (authors) => authors.map(({ image: media, name }) => (
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

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "name", align: "left" },
    { name: "members", align: "left" },
    { name: "priority", align: "left" },
    { name: "project", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "Deadline", align: "left" },
    { name: "actions", align: "center" },
  ],

  rows: [
    {
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
                    // onClick={}
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

    },
    {
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
                    // onClick={}
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

    },
    {
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
                    // onClick={}
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

    },
    
  ],
};

export default projectsTableData;
