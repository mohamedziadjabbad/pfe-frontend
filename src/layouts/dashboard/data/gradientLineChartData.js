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

const gradientLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Total opened tasks",
      color: "dark",
      data: [50, 40, 30, 220, 500, 250, 400, 230, 500],
    },
    {
      label: "Total closed tasks",
      color: "info",
      data: [30, 40, 20, 140, 290, 230, 340, 180, 500],
    },
  ],
};

export default gradientLineChartData;
