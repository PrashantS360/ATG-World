import Navbar from '../components/Navbar'
import '../styles/globals.css'
import styles from '../styles/index.module.css'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [signup, setSignup] = useState(false);

  return (
    <div className={styles.fontFamily}>
      <Navbar setSignup={setSignup}/>
      <Component {...pageProps} signup={signup} setSignup={setSignup}/>
    </div>
  )
}

export default MyApp
