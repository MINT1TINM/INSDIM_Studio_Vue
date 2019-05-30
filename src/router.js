import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/Login")
    },
    {
      path: "/index",
      component: () => import("./views/Index"),
      children: [
        {
          path: "/launcher",
          component: () => import("./views/Launcher")
        },
        {
          path: "/insdim",
          component: () => import("./views/insdim/Home"),
          children: [
            {
              path: "/insdim/work",
              component: () => import("./components/insdim/work/List"),
              children: [
                {
                  path: "/insdim/work/:id",
                  component: () => import("./components/insdim/work/Detail")
                }
              ]
            },
            {
              path: "/insdim/newwork",
              component: () => import("./components/insdim/work/New")
            },
            {
              path: "/insdim/news",
              component: () => import("./components/insdim/news/List"),
              children: [
                {
                  path: "/insdim/news/:id",
                  component: () => import("./components/insdim/news/Detail")
                }
              ]
            },
            {
              path: "/insdim/newnews",
              component: () => import("./components/insdim/news/New")
            }
          ]
        }
      ]
    }
  ]
});
