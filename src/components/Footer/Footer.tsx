import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href='https://github.com/psyhedeliq'>
        Cornel Cristian Filip - Github Profile
      </a>
      <br />- {currentYear} -
    </footer>
  );
};
