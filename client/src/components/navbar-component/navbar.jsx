import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        /* return a navbar with a top level div, and links to the homepage, Game page, and History page! */
        /* Hint: the Next.js Link component may come in handy https://nextjs.org/docs/pages/api-reference/components/link */
        <div id={styles.navbar}>
            <div className={styles.title}>
                {<Link href = "/index">Home</Link>}
            </div>
        <div className={styles.nav_buttons}>
            {<Link href ="/gameHistory">Game History</Link>}
            </div>
        </div>
    )
}

// Export the NavBar, and import it in pages/_app.jsx to render it on all pages of your website!
export default Navbar;