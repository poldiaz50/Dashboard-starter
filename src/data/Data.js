//sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  //UilSignOutAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"

//sidebar data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Panel de Control",
  },
  {
    icon: UilClipboardAlt,
    heading: "Ordenes",
  },
  {
    icon: UilUsersAlt,
    heading: "Clientes",
  },
  {
    icon: UilPackage,
    heading: "Productos",
  },
  {
    icon: UilChart,
    heading: "Analiticas",
  },
  //   {
  //     icon: UilSignOutAlt,
  //     heading: "Salir",
  //   },
];

//cards data
export const CardsData = [
  {
    title: "Ventas",
    color: {
      background: "linear-gradient(180deg, #bb67ff 0%, #c484f3, 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "27,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Ganancias",
    color: {
      backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
      boxShadow: "0px 10px 20px 0px #fdc0c7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Ganancias",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Gastos",
    color: {
      background:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #f9d59b",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Gastos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

//actulizaciones recientes
export const UpdatesData = [
  {
    img: img1,
    name: "Paul Diaz",
    noti: "Ha ordenado Rabiolis de carne",
    time: "hace 35 segundo",
  },
  {
    img: img2,
    name: "Alex velez",
    noti: "Ha recibido Pasta con salsa bologñesa",
    time: "hace 30 minutos",
  },
  {
    img: img3,
    name: "Gloria Velez",
    noti: "Ha ordenado Fetuchini con salsa alfredo",
    time: "hace 2 horas",
  },
];
