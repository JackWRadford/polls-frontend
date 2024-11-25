import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <p>Copyright © 2024 Jack Radford. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
