import App from '../components/App.js'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <App>
      <div>
        <p className={styles['page-title']}>index page</p>
        <p>&nbsp;</p>
        あーだこーだ<br/>
        うんたらかんたら<br/>
      </div>
    </App>
  )
}
