import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import WhoWeAre from "../pages/WhoWeAre.jsx";
import SupportAndCommunication from "../pages/SupportAndCommunication.jsx";
import Blog from "../pages/Blog.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import StudyPrograms from "../pages/StudyPrograms.jsx";
import StudyCourses from "../pages/StudyCourses.jsx";
import { NavbarProvider } from "../contexts/NavBarContext";
import BlogPost from "../pages/BlogPost.jsx";

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
        path: "study-courses",
        element: <StudyCourses />,
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
        path: "blog/:id",
        element: <BlogPost />,
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
    <NavbarProvider>
      <RouterProvider router={router} />
    </NavbarProvider>
  );
};

export default AppRouter;
