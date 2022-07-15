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
      data: [5, 12, 3, 22, 5, 25, 4, 2, 5],
    },
    {
      label: "Total closed tasks",
      color: "info",
      data: [3, 4, 2, 14, 2, 23, 3, 1, 5],
    },
  ],
};

export default gradientLineChartData;
