import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";
import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Second } from '../components/welcome/second';
import { Third } from "../components/welcome/third";
import { Forth } from "../components/welcome/forth";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Forth },
    ],
  },
];
