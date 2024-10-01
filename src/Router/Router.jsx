import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import WhoWeAre from "../pages/WhoWeAre.jsx";
import StudyPrograms from "../pages/StudyPrograms.jsx";
<<<<<<< HEAD
import SupportAndCommunication from "../pages/SupportAndCommunication.jsx";
=======
import SupportAndCommunication from '../pages/SupportAndCommunication.jsx'
>>>>>>> 448f919685dc21677a28c67cc28c54d5aa2039c7
import Blog from "../pages/Blog.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";

<<<<<<< HEAD
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "study-programs",
        element: <StudyPrograms />,
      },
      {
        path: "who-we-are",
        element: <WhoWeAre />,
      },
      {
        path: "support-and-communication",
        element: <SupportAndCommunication />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
=======
const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
               index:true,
               element:<HomePage/>
            },
            {
                path:'study-programs',
                element:<StudyPrograms/>
            },{
                path:"who-we-are",
                element:<WhoWeAre/>
            },{
                path:"support-and-communication",
                element:<SupportAndCommunication/>
            },{
                path:"blog",
                element:<Blog/>
            },{
                path:"register",
                element:<Register/>
            },{
                path:"login",
                element:<Login/>
            }
        ]
    }
])

const AppRouter=()=>{
    return(
        <div className="">
            <RouterProvider router={router}/>
        </div>
    )
}

export default AppRouter
>>>>>>> 448f919685dc21677a28c67cc28c54d5aa2039c7
