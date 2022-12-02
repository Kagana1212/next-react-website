import styles from "../Hero/Hero.module.css";

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {imageOn && <figure> [画像] </figure>}
    </div>
  );
}
