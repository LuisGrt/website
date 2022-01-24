import {FunctionComponent, useCallback, useEffect, useState} from 'react';
import styles from './Scrollspy.module.scss';

export interface NavigationItem {
    id: string;
    title: string;
    visible: boolean;
    disabled?: boolean;
    element?: HTMLElement;
}

export interface ScrollspyProps {
    navItems: NavigationItem[];
}

const Scrollspy: FunctionComponent<ScrollspyProps> = ({navItems}) => {
    const [items, setItems] = useState<NavigationItem[]>([]);

    const isInView = (element: HTMLElement) => {
        if (!element) {
            return false;
        }

        const id = element.getAttribute('id'),
            bounding = element.getBoundingClientRect();

        if (id === 'home') {
            return bounding.bottom - 190 <= bounding.height && bounding.bottom - 190 > 0;
        } else {
            const offset = document.getElementById('upperNavbar').getBoundingClientRect().height;
            return bounding.bottom <= bounding.height + offset && bounding.bottom > 0;
        }
    };

    const scrollTo = (item: NavigationItem) => {
        // TODO: Change to custom function to scroll instead of scrollIntoView()
        // Smooth behavior is not supported on IE or Safari

        if (!item.disabled)
            item.element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    };

    const init = useCallback(
        (): void => {
            const spy = () => {
                const _items = navItems.map((item) => {
                    const element = document.getElementById(item.id);
                    if (element) {
                        return {
                            ...item,
                            element,
                            visible: isInView(element)
                        };
                    } else {
                        return {
                            ...item,
                            visible: false,
                            disabled: true
                        };
                    }
                });

                setItems(_items);
            };
            spy();
            window.addEventListener('scroll', spy, {passive: true});
        },
        [navItems]
    );

    useEffect(() => {
        init();
    }, [init]);

    return (
        <>
            {items.map((item, i) => (
                    <li key={i} className={`nav-item ${styles.navItem}`} onClick={() => scrollTo(item)}>
                        <div className={`nav-link${item.visible ? ' active' : ''} ${styles.navLink}`}>{item.title}</div>
                    </li>
                )
            )}
        </>
    );
};

export default Scrollspy;
