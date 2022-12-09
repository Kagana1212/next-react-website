import Container from "./container"
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "styles/Header.module.css"

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
