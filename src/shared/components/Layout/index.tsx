import {FunctionComponent} from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: FunctionComponent = ({children}) => (
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
);

export default Layout;
