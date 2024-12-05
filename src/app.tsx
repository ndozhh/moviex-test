import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Index from "./pages/index";
import Detail from "./pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="/movies">Movies</Link>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "movies",
        element: (
          <div>
            <Outlet />
          </div>
        ),
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: ":movieId",
            element: (
              <div>
                <Detail />
                <Outlet />
              </div>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
