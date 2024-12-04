import { Outlet } from "react-router-dom";

import { DataTable } from "./components/movies-table";

export function Movies() {
  return (
    <div>
      <h1>Lista de películas</h1>
      <div>
        <DataTable columns={[]} data={[]} />
      </div>

      <Outlet />
    </div>
  );
}
