import styles from "styles/post-categories.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <spen className="sr-onry">Categories</spen>
            </h3>
        <ul className={styles.list}>
            {categories.map(({ slug }) => (
                <li key={slug}>
                    <Link href={`/blog/category/${slug}`}>
                    </Link>
                </li>
            ))}
            </ul>
            </div>
    )
 }