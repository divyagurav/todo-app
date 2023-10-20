import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todos List</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Add Todos</Link>
          </li>
          <li>
            <Link href="/all">All Todos</Link>
          </li>

          <li>
            <Link href="/complete">complete Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
