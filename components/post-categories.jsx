import styles from "styles/post-categories.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
            </h3>
        <ul className={styles.list}>
            {categories.map(({ name, slug }) => (
                <li key={slug}>
                    <Link href={`/blog/category/${slug}`}>
                        <div>{name}</div>
                    </Link>
                </li>
            ))}
            </ul>
            </div>
    )
 }