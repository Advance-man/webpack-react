import {
  Link,
  Outlet
} from "react-router-dom";
export default () => {
  return (
    <div>
      <nav>
        <Link to="about">about</Link>
        <Link to="me">me</Link>
      </nav>
      <Outlet />
    </div>
  );
}