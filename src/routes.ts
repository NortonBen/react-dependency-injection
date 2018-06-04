import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import DetailPostPage from './Pages/DetailPostPage';
// import CategoryPostPage from './Pages/CategoryPostPage';
import HomeLayout from './Containers/HomeLayout';
import Middware from './Containers/Middware';
import FeedbackPage from './Pages/FeedbackPage';

const routes = [
  {
    layout: HomeLayout,
    middware: Middware,
    routes: [
      {
        path: '/',
        component: HomePage,
        option: { exact: true },
      }
    ]
  },
  {
    layout: HomeLayout,
    routes: [
      {
        path: '/dang-nhap',
        component: LoginPage,
        option: { exact: true },
      }
    ]
  },
  {
    layout: HomeLayout,
    routes: [
      {
        path: '/phan-hoi',
        component: FeedbackPage,
        option: { exact: true },
      }
    ]
  },
  {
    layout: HomeLayout,
    routes: [
      {
        path: '/bai-viet/:id',
        component: DetailPostPage,
        option: { exact: true },
      }
    ]
  },
  // {
  //   layout: HomeLayout,
  //   routes: [
  //     {
  //       path: '/danh-muc/:id',
  //       component: CategoryPostPage,
  //       option: { exact: true },
  //     }
  //   ]
  // },
 
]


export default routes;