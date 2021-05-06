import Vue from "vue";
import VueRouter from "vue-router";
// login
import Login from "@/views/Login/Login";
import AfterLogin from "@/components/Login/AfterLogin";
import BeforeLogin from "@/components/Login/BeforeLogin";
// main
import Index from "@/views/Main/Index";

import DashBoard from "@/views/DashBoard/DashBoard";

import MyProject from "@/views/MyProject/MyProject";
import MyProjectMain from "@/views/MyProject/MyProjectMain";
import MyProjectStatus from "@/views/MyProject/MyProjectStatus";
import MyProjectResult from "@/views/MyProject/MyProjectResult";
import LicenseList from "@/components/MyProject/LicenseList";

import MyPage from "@/views/MyPage/MyPage";
import MyPageProfile from "@/views/MyPage/MyPageProfile";
import MyPageSCM from "@/views/MyPage/MyPageSCM";
import MyPageGitLab from "@/views/MyPage/MyPageGitLab";
import OpensourceList from "@/components/MyProject/OpensourceList";
import AddComponent from "@/components/MyProject/AddComponent";
import OpensourceMain from "@/views/MyProject/OpensourceMain"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    children: [
      {
        path: "afterLogin",
        name: "AfterLogin",
        component: AfterLogin,
      },
      {
        path: "",
        name: "BeforeLogin",
        component: BeforeLogin,
      },
    ],
  },
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "dashboard",
        name: "DashBoard",
        component: DashBoard,
      },
      {
        path: "project",
        name: "Project",
        component: MyProject,
        children: [
          {
            path: "main",
            name: "MyProjectMain",
            component: MyProjectMain,
            children: [
              {
                path: "status",
                name: "Status",
                component: MyProjectStatus,
              },
              {
                path: "gitlab",
                name: "GitLab",
                component: DashBoard,
              },
              {
                path: "github",
                name: "GitHub",
                component: DashBoard,
              },
            ],
          },
          {
            path: "result",
            name: "MyProjectResult",
            component: MyProjectResult,
            children: [
              {
                path: "summary",
                name: "Summary",
                component: DashBoard,
              },

              {
                path: "license",
                name: "License",
                component: LicenseList,
              },
              {
                path: "component",
                name: "Component",
                component: OpensourceMain,
                children: [
                  {
                    path: "addComponent",
                    name: "AddComponent",
                    component: AddComponent,
                  },
                  {
                    path: "",
                    name: "ComponentList",
                    component: OpensourceList,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "mypage",
        name: "MyPage",
        component: MyPage,
        children: [
          {
            path: "profile",
            name: "MyPageProfile",
            component: MyPageProfile,
          },
          {
            path: "scm",
            name: "MyPageSCM",
            component: MyPageSCM,
            children: [
              {
                path: "gitlab",
                name: "MyPageGitLab",
                component: MyPageGitLab,
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes,
});

export default router;
