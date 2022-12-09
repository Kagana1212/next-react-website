import Container from "./container";
import Logo from "./Logo";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
        </div>
      </Container>
    </footer>
  );
}
