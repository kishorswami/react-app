import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CountertopsIcon from '@mui/icons-material/Countertops';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import QuizIcon from '@mui/icons-material/Quiz';
import Filter9Icon from '@mui/icons-material/Filter9';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
export const eventbriteRoutes =[
  {
    sidebarName:'Home',
    path:'/home',
    icon: <HomeIcon/>
  },
  {
    sidebarName:'User App',
    path:'/user-app',
    icon:<AccountCircleIcon/>
  },
  {
    sidebarName:'Counter App',
    path:'/counter-app',
    icon:<CountertopsIcon/>
  },
  {
    sidebarName:'Todo App',
    path:'/todo-app',
    icon:<ListAltIcon/>
  },
  {
    sidebarName:'Product App',
    path:'/product-app',
    icon:<ProductionQuantityLimitsIcon/>
  },
  {
    sidebarName:'Quiz App',
    path:'/quiz',
    icon:<QuizIcon/>
  },
  {
    sidebarName:'Pagination App',
    path:'/pagination-listing',
    icon:<Filter9Icon/>
  }
];