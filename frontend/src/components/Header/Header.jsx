import styles from './Header.module.scss'
import {Logout} from "../Authorization/Logout/Logout.jsx";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.logoLink} to="/index">
          Todo List<img className={styles.logoImg} src="/logo.png" alt="Site logo"/>
        </Link>
      </div>
      <div className={styles.logout}>
        <Logout/>
      </div>
    </div>
  );
};
