import styles from "styles/social.module/css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from "@fortawesome/free-brands-svg-icons"

export default functionSocial() {
    return (
        <ul className={styles.list}>
            <li>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <spen className="sr-only">Twitter</spen>
                </a>
            </li>
            <li>
                <a href="https://facebook.com/">
                    <FontAwesomeIcon icon={fafacebookF} />
                </a>
            </li>
        </ul>
    )
}