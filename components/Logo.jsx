import Link from "next/link";
import styles from "../styles/Logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/" legacyBehavior>
      <div className={boxOn ? styles.box : styles.besic}>CUBE</div>
    </Link>
  );
}
