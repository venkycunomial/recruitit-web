import { Header } from "../../login/Header";
import { Footer } from "../../login/Footer";

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