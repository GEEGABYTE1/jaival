import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <Image src='/images/please.jpeg' layout='fill' objectFit='cover' quality={100} />
        <div className={styles.overlay}></div>
        <div className={styles.bottomRightBox}>
          <p className={styles.text}>Jaival Patel</p>
          <p className={styles.text}>2nd Year Engineering Science majoring in Aerospace with a Minor in Robotics</p>
          <p className={styles.text}>My focus is in Power Electronics for High-Powered Vehicles </p>
          <p className={styles.text}>Research @ ISML University of Toronto</p>
          <p className={styles.text}>UTAT Software Lead and Hardware Engineer.</p>
          <p className={styles.text}>Prior to that</p>
          <p className={styles.text}>Flight System Intern at LUNR.</p>
          <p className={styles.text}>Fullstack Engineer at OWH.</p>
          <p className={styles.text}>Author of Beauty of Mathematics.</p>
          <p className={styles.text}>HackTheNorth 2022 Winner.</p>
        </div>

        <div className={styles.hardwareText}><Link href='https://www.linkedin.com/in/jaivalpatel/'><u><p>LinkedIn.</p></u></Link></div>
        <div className={styles.papersText}><Link href='https://drive.google.com/drive/folders/1Jaqv_N0c119A2mra4iyJKPF1iPr_7kle?usp=sharing'><u><p><p>Papers.</p></p></u></Link></div>
        <div className={styles.otherprojectsText}><Link href=''><u><p>Design Portfolio (coming soon)</p></u></Link></div>

        
        




      </div>
    </>
  );
}