import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import "./Navbar.css";

export const SidebarData = [
    {
        title: "Profile",
        path: "/",
        icon: <CgIcons.CgProfile />,
        cName: "nav-text",
    },
    {
        title: "My Requests",
        path: "/abc",
        icon: <AiIcons.AiTwotoneFolderOpen />,
        cName: "nav-text",
    },
    {
        title: "Notification",
        path: "/def",
        icon: <MdIcons.MdNotificationAdd />,
        cName: "nav-text",
    },
    {
        title: "Settings",
        path: "/ghi",
        icon: <MdIcons.MdSettingsSuggest />,
        cName: "nav-text",
    },
];
