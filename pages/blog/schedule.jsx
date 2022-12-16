import { getPostBySlug } from "../../lib/api"
import Container from "../../components/container"
import PostHeader from "../../components/post-header"
import { TwoColumn, TwoColumnMain, TwolumnSidebar } from "../../components/two-column"
import Image from "next/legacy/image"
import PostBody from "components/post-body"

export default function Schedule({
    title,
    publish,
    content,
    eyecatch,
    categories,
}) {
    return (
        <Container>
            <article>
                <PostHeader title={title} sub="Blog Article" publish={publish} />

                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        layout="responsive"
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>{content}</PostBody>
                    </TwoColumnMain>
                    <TwolumnSidebar></TwolumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'
    
    const post = await getPostBySlug(slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}