import styles from '../styles/Sorry.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import sorrypic from '/public/graphics/pics/sorry.jpg';

const Sorry: NextPage = () => {
  
  const { t, lang } = useTranslation('common');
  const sorry_pageTitle = t('sorry_pageTitle');
  const sorry_title_h1 = t('sorry_title_h1');
  const sorry_title_p = t('sorry_title_p');

  return (
      <>
         
        <Head>
          <title>{sorry_pageTitle}</title>
        </Head>

        {/* Title */}
        <div className={styles.sorry_title_div}>
          <h1 className={styles.sorry_title_h1}>{sorry_title_h1}</h1>
          <p>{sorry_title_p}</p>
        </div>

        <div className={styles.sorry_img}>
          <Image src={sorrypic} alt='Image to say sorry' width='250' height='250'></Image>
        </div>

      </>
  ) 

};

export default Sorry