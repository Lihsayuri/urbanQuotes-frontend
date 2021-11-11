import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export const SidebarData = [
    {
        title: "Frase do dia",
        icon: <HomeIcon />,
        path: "/",
        cName: "nav-text"
    },

    {
        title: "Suas Frases",
        icon: <BorderColorIcon />,
        path: "/suasfrases",
        cName: "nav-text"
    },
]

