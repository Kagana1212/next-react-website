import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/">
      <div className={boxOn ? styles.box : styles.besic}>CUBE</div>
    </Link>
  );
}
