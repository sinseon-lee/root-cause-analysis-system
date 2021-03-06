import Vue from 'vue';
import Router from 'vue-router';

// import PersonalBlog from './views/PersonalBlog.vue';
// import UserProfileLite from './views/UserProfileLite.vue';
// import AddNewPost from './views/AddNewPost.vue';
// import Errors from './views/Errors.vue';
// import ComponentsOverview from './views/ComponentsOverview.vue';
// import Tables from './views/Tables.vue';
// import BlogPosts from './views/BlogPosts.vue';
import Dashboard from './views/Dashboard.vue';
import ManagedElements from './views/ManagedElements.vue';
import Logs from './views/Logs.vue';
import RCAResults from './views/RCAResults.vue';
import Topology from './views/Topology.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    /*
    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
    },
    {
      path: '/user-profile-lite',
      name: 'user-profile-lite',
      component: UserProfileLite,
    },
    {
      path: '/add-new-post',
      name: 'add-new-post',
      component: AddNewPost,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
    }, {
      path: '*',
      redirect: '/errors',
    },
    */
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/managed-elements',
      name: 'managed-elements',
      component: ManagedElements,
    },
    {
      path: '/logs',
      name: 'logs',
      component: Logs,
    },
    {
      path: '/rca-results',
      name: 'rca-results',
      component: RCAResults,
    },
    {
      path: '/topology',
      name: 'topology',
      component: Topology,
    },
  ],
});
