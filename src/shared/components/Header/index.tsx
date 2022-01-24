import Link from 'next/link';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Scrollspy, {NavigationItem} from '../Scrollspy';

import styles from './Header.module.scss';

export default function Header() {
    const navItems: NavigationItem[] = [
        {id: 'home', title: 'Home', visible: false},
        {id: 'about', title: 'About', visible: false},
        {id: 'skills', title: 'Skills', visible: false},
        {id: 'portfolio', title: 'Portfolio', visible: false},
    ];

    return (
        <header>
            <Navbar
                expand='md'
                variant='dark'
                fixed='top'
                className={styles.navbar}
            >
                <Container className={styles.container}>
                    <div className={`navbar-brand text-stone-200 ${styles.navbarBrand}`}>
                        <Link href="/">
                            <a title="Go home">Luis Germán</a>
                        </Link>
                    </div>
                    <Navbar.Collapse className={styles.menu}>
                        <Nav as="ul">
                            <Scrollspy navItems={navItems} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
