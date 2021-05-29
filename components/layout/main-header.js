import Link from "next/link";
import Classes from "components/layout/main-header.module.css";

const Header = () => {
  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>
        <Link href="/">Next Link</Link>
      </div>
      <nav className={Classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
