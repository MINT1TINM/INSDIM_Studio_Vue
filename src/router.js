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
          path: "/inslens",
          component: () => import("./views/inslens/Home"),
          children: [
            {
              path: "/inslens/work",
              component: () => import("./components/inslens/work/List"),
              children: [
                {
                  path: "/inslens/work/:id",
                  component: () => import("./components/inslens/work/Detail")
                }
              ]
            },
            {
              path: "/inslens/newwork",
              component: () => import("./components/inslens/news/New")
            },
            {
              path: "/inslens/news",
              component: () => import("./components/inslens/news/List"),
              children: [
                {
                  path: "/inslens/news/:id",
                  component: () => import("./components/inslens/news/Detail")
                }
              ]
            },
            {
              path: "/inslens/newnews",
              component: () => import("./components/inslens/news/New")
            }
          ]
        }
      ]
    }
  ]
});
