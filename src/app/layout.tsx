import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import styles from './page.module.css'

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <nav className={styles.navbar}>
        <Menu />
      </nav>
      {children}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}