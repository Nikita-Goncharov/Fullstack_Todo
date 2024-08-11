import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>© 2024 Todo. All rights reserved.</p>
      <p className={styles.design}>Frontend created by <a href="https://github.com/Nikita-Goncharov">Nik</a></p>
    </div>
  );
};
