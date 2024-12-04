import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Movies from "./routes/movies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/movies",
        element: (
          <Movies />
        ),
        children: [
          {
            path: ":movieId",
            element: (
              <div>
                <div>Movie detail route</div>
                <Link to="/movies">Back to movies</Link>
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
