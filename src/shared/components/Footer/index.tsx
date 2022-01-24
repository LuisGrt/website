import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; {new Date().getFullYear()} Luis Germán</p>
            <p>Software Developer</p>
        </footer>
    );
}
