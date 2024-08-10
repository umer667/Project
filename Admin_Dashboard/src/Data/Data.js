// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilExclamationTriangle,
  UilFileAlt,
  UilUserCheck,
  UilCommentDots,
  UilWrench,
  UilWater,
  UilBolt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import { path } from "express/lib/application";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },

  {
    icon: UilUsersAlt,
    heading: "User Profiles",
  },
  {
    icon: UilExclamationTriangle,
    heading: "Send Warning",
  },
  {
    icon: UilFileAlt,
    heading: "View Reports",
  },
  {
    icon: UilUserCheck,
    heading: "Set Skill Test",
  },
  {
    icon: UilCommentDots,
    heading: "View Remarks",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Mechanic Jobs",
    color: {
      backGround: "linear-gradient(180deg, #ffcc70 0%, #ff9a8b 100%)",
      boxShadow: "0px 10px 20px 0px #ffd3b6",
    },
    barValue: 75,
    value: "1,230",
    png: UilWrench,
    series: [
      {
        name: "Mechanic Jobs",
        data: [20, 30, 35, 50, 40, 60, 70],
      },
    ],
  },
  {
    title: "Plumbing Jobs",
    color: {
      backGround: "linear-gradient(180deg, #70a1ff 0%, #1e90ff 100%)",
      boxShadow: "0px 10px 20px 0px #a0d2eb",
    },
    barValue: 65,
    value: "870",
    png: UilWater,
    series: [
      {
        name: "Plumbing Jobs",
        data: [15, 25, 20, 35, 30, 40, 50],
      },
    ],
  },
  {
    title: "Electrical Jobs",
    color: {
      backGround: "linear-gradient(180deg, #e5e5e5 0%, #b4b4b4 100%)",
      boxShadow: "0px 10px 20px 0px #c8c8c8",
    },
    barValue: 80,
    value: "1,570",
    png: UilBolt,
    series: [
      {
        name: "Electrical Jobs",
        data: [30, 45, 40, 60, 55, 70, 80],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "John Mechanic",
    noti: "has completed a vehicle engine repair.",
    time: "10 minutes ago",
  },
  {
    img: img2,
    name: "Sarah Plumber",
    noti: "fixed a leaking pipe in a residential building.",
    time: "45 minutes ago",
  },
  {
    img: img3,
    name: "Mike Electrician",
    noti: "installed a new electrical circuit for a home.",
    time: "1 hour ago",
  },
];
