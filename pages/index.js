import Head from "next/head";
import Image from "next/image";
import Link from "next/link.js";
import Rreact from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Posts />
        <EachPost title="Props" url="http:/..."></EachPost>
        <h1>CUBE</h1>
        <p>アウトプットしていくサイト</p>
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
