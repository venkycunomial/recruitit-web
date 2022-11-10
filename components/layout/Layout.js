import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

const Layout = ({ children, dir }) => {
    return (
        <div dir={dir}>
            <Header />
            <main>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;