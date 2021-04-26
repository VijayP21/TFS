import React from "react";

import {
  Assignment,
  Create,
  Dvr,
  People,
  Streetview,
  Timeline,
  ViewList,
  DataUsage,
} from "@material-ui/icons";

const menuItems = [
    {
        menuName: "Cases",
        menuIcon: <Streetview />,
        menuPath: "/cases",
        pageTitle: "Cases",
      },
      {
        menuName: "Entities",
        menuIcon: <Assignment />,
        menuPath: "/entities",
        pageTitle: "Entities",
      },
      {
        menuName: "Departments",
        menuIcon: <ViewList />,
        menuPath: "/departments",
        pageTitle: "Departments",
      },
      {
        menuName: "Facts",
        menuIcon: <People />,
        menuPath: "/facts",
        pageTitle: "Facts",
      },
      {
        menuName: "Quest",
        menuIcon: <People />,
        menuPath: "/quest",
        pageTitle: "Quest",
      },
      {
        menuName: "Standards",
        menuIcon: <People />,
        menuPath: "/standards",
        pageTitle: "Standards",
      },
      {
        menuName: "Cast",
        menuIcon: <People />,
        menuPath: "/cast",
        pageTitle: "Cast",
      }
];

export default menuItems;
