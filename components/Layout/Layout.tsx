import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
