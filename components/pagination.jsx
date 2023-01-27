import styles from "styles/pagination.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Pagination({
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
}) {
    return (
      <ul className={styles.flexContainaer}>
        {prevText && prevUrl && (
          <li className={styles.iconText}>
            <Link href={prevUrl}>
              <div className={styles.iconText}>
                <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
                <span>{prevText}</span>
              </div>
            </Link>
          </li>
        )}
        {nextText && nextUrl && (
          <li className={styles.next}>
            <Link href={nextUrl}>
              <div className={styles.iconText}>
                <span>{nextText}</span>
                <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
              </div>
            </Link>
          </li>
        )}
      </ul>
    );
}