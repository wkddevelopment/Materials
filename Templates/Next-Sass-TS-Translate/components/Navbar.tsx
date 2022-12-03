import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  
    const { t, lang } = useTranslation('common');

    return (
            <nav className={styles.mynavbar}>

                <ul>

                    {/* Home */}
<<<<<<< HEAD
                    <li className={styles.nav_item_home}>
                        <Link href="/" className={`${styles.navbar_link} ${styles.navbar_link_home}`} >Home</Link>
                    </li>
                    
                    {/* Content */}
                    <li className={styles.dropdown}>
                        <div className={`${styles.navbar_link} ${styles.navbar_link_content_dropdown}`} >Content</div>
                            <div className={styles.dropdown_content}>
                                <Link  className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_1}`} href="/">Content 1</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/">Content 2</Link>
                            </div>
                    </li>

                    {/* About & Contact */}
                    <li className={styles.nav_item_about}>
                        <Link href="/about" className={`${styles.navbar_link} ${styles.navbar_link_about}`} >About - Contact</Link>
=======
                    <li className={styles.dropdown}>
                        <div className={`${styles.navbar_link} ${styles.navbar_link_content_dropdown}`} >Menü</div>
                            <div className={styles.dropdown_content}>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/sorry">Produktdatenbank</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/sorry">Trainingsdatenbank</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_1}`} href="/about">Über</Link>
                                <Link className={`${styles.navbar_link} ${styles.nav_item_content_dropdown_li_2}`} href="/contact">Kontakt</Link>
                            </div>
                    </li>
                    
                    {/* Content */}
                    <li className={styles.nav_item_energy}>
                        <Link href="/absorption" className={`${styles.navbar_link} ${styles.navbar_link_power}`} >Energie</Link>
                    </li>

                    {/* About & Contact */}
                    <li className={styles.nav_item_consumption}>
                        <Link href="/consumption" className={`${styles.navbar_link} ${styles.navbar_link_consumption}`} >Verbauch</Link>
>>>>>>> 348dead041077eea95b341ffa490879034f52f96
                    </li>

                </ul>
            </nav>
    )
} 
