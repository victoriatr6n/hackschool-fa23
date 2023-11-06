import Image from 'next/image';
import styles from '../styles/Home.module.css'
import logo from '../assets/acmlogo.png'


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2> Welcome to HackRacer! </h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top. Then you can go over to <i>Play Game</i> to start playing the game.</p>
          {/* Replace the heading, and add a short paragraph about your website here! */}
        </div>
      <div className={styles.image}>
        {<Image src={logo} height={200} width={200} alt='acmlogo'/>}
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
      </div>
    </div>
  )
}
