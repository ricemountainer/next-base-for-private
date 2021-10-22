import React from 'react'
//import Header from './Header'
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/App.module.css';
const siteInfos = require('../modules/site-info.js');

const App = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>{siteInfos.SITE_TITLE}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:title" content={siteInfos.SITE_TITLE} key="title" />
      <meta property="og:url" content={siteInfos.OG_URL} />
      <meta property="og:image" content={siteInfos.OG_IMAGE} />
      <meta property="og:description" content={siteInfos.OG_DESCRIPTION} />
      <meta property="og:keywords" content={siteInfos.OG_KEYWORDS} />
    </Head>
    <body className={styles['entire-page']}>
        
      <div className={styles.container}>
        <main className={styles.content}>
          <p>&nbsp;</p>
          {children}
          <p>&nbsp;</p>
        </main>
        <footer className={styles.footer}>
          Copyrights; <Link href="https://twitter.com/rm_blank_slash"><a>@rm_blank_slash</a></Link>
        </footer>
      </div>
    </body>
  </React.Fragment>
)

export default App
