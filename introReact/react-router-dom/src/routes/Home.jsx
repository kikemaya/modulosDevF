import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div>
      <Menu />
      <h1>Home</h1>
      <p>Hello</p>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
