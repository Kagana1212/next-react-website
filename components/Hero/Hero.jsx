export default functionHero(prors);
{
  const { title, subTitle, imageOn } = props;

  return (
    <div className={style.text}>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure>[画像]</figure>}
      <Link href="/about">ABOUT</Link>
    </div>
  );
}
