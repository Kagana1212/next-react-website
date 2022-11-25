export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
