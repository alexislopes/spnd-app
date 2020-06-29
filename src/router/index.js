import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Importar from "../views/Importar";
import Overview from "../views/Overview";
import Gerenciar from "../views/Gerenciar";
import Categorizar from "../views/Categorizar";
import Planejar from "../views/Planejar";
import HomeOld from "../views/Home.old.vue";
// import Produtos from "../views/Gerenciar/Produtos";
import Categorias from "../views/Gerenciar/Categorias";
// import Cupons from "../views/Gerenciar/Cupons";
import SubCategorias from "../views/Gerenciar/SubCategorias";
import Categoria from "../views/Gerenciar/Categoria";

Vue.use(VueRouter);

const routes = [
  {
    path: "/importar",
    name: "Importar",
    component: Importar,
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/categorizar",
    name: "Categorizar",
    component: Categorizar,
  },
  {
    path: "/planejar",
    name: "Planejar",
    component: Planejar,
  },
  {
    path: "/gerenciar",
    name: "Gerenciar",
    component: Gerenciar,
  },
  {
    path: "/gerenciar/categorias",
    name: "Categorias",
    component: Categorias,
  },
  {
    path: "/gerenciar/categoria/:id",
    name: "Categoria",
    component: Categoria,
  },
  {
    path: "/gerenciar/sub-categorias",
    name: "Sub-categorias",
    component: SubCategorias,
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   alias: "/home",
  //   redirect: { path: "/overview" },
  //   children: [
  //     { path: "/importar", name: "Importar", component: Importar },
  //     { path: "/overview", name: "Overview", component: Overview },
  //     { path: "/categorizar", name: "Categorizar", component: Categorizar },
  //     { path: "/planejar", name: "Planejar", component: Planejar },
  //     {
  //       path: "/gerenciar",
  //       name: "Gerenciar",
  //       component: Gerenciar,
  //       redirect: { path: "/gerenciar/produtos" },
  //       children: [
  //         {
  //           path: "/gerenciar/produtos",
  //           name: "Produtos",
  //           component: Produtos,
  //         },
  //         {
  //           path: "/gerenciar/categorias",
  //           name: "Categorias",
  //           component: Categorias,
  //         },
  //         {
  //           path: "/gerenciar/categorias/:id",
  //           name: "Categoria",
  //           component: Categoria,
  //         },
  //         { path: "/gerenciar/cupons", name: "Cupons", component: Cupons },
  //         {
  //           path: "/gerenciar/sub-categorias",
  //           name: "Sub-categorias",
  //           component: SubCategorias,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeOld,
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: () => import("../views/Produtos.vue"),
  },
  {
    path: "/cupons",
    name: "Cupons",
    component: () => import("../views/Cupons.vue"),
  },
  {
    path: "/categorizar",
    name: "Categorizar",
    component: () => import("../views/Categorizar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
