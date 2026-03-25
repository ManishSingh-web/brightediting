

import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy , Suspense } from "react";
import AppLayout from './AppLayout';
import Loader from "./components/loader/Loader";
// import ErrorPage from "./components/errorpage/Errorpage";
const Services = lazy(()=> import('./components/Services/Services'))
const Pricing = lazy(()=> import('./components/pricing/Pricing'))
const Contact = lazy(()=> import('./components/contact page/Contact'))
const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import("./components/aboutpage/About"))
const PinterestGallery = lazy(()=> import('./components/gallery/Gallery'))
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"))
const ErrorPage = lazy ( () =>import("./components/errorpage/Errorpage"))


const LoadAble = (Component) => {
  return (
    <Suspense
    fallback={
       <div className="flex items-center justify-center py-100">
  <Loader />
</div>
    }>
    <Component />
    </Suspense>
  )}


const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true, // better than path:"/"
        element: LoadAble(Home),
      },
      {
        path: "services",
        element: LoadAble(Services),
      },
      {
        path: "about",
        element: LoadAble(About), 
      },
      {
        path: "portfolio",
        element: LoadAble(Portfolio),

      },
      {
        path: "gallery", 
        element: LoadAble(PinterestGallery)
      },
      {
        path: "pricing",
        element: LoadAble(Pricing)
      },
      {
        path: "contact",
        element: LoadAble(Contact)
      }
    ]
  },
    {
        path: "*",
        element: LoadAble(ErrorPage)
      }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
