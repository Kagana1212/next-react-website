import Meta from "components/meta"
import Container from "../components/container.jsx";
import Hero from "components/Hero";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  )
}
