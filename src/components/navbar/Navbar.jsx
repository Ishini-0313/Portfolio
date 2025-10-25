import React,{useState} from 'react';
import {getImageUrl} from '../../utils';
import styles from './Navbar.module.css';

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen?'assets/menuIcon.png':'assets/closeIcon.png'} alt='menu-btn' onClick={()=>setMenuOpen(!menuOpen)}></img>
            <ul className={styles.menuItems}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
