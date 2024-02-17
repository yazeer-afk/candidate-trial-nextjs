import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Button from "@/components/Button";

import "./globals.scss";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Test App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={font.className}>
                <header>
                    <nav>
                        <span className="logo">COMPANY LOGO</span>
                        <div className="menu-container">
                            <span>About</span>
                            <span>Services</span>
                            <span>FAQs</span>
                            <span>News</span>
                        </div>
                        <Button label="Contact us" secondary />
                    </nav>
                </header>
                {children}
                <footer>
                    <span className="logo">COMPANY LOGO</span>
                    <div className="footer-menu">
                        <div className="menu-slot">
                            <h4>About</h4>
                            <span>About menu item 1</span>
                            <span>About menu item 2</span>
                            <span>About menu item 3</span>
                            <span>About menu item 4</span>
                        </div>
                        <div>Services</div>
                        <div>Footer links 1</div>
                        <div>Footer links 2</div>
                    </div>
                    <div className="line" />
                    <div className="footer-glossary">
                        <span>© 2022 Company Inc.</span>
                        <span>Terms and conditions</span>
                        <span>Privacy policy</span>
                        <span>Privacy policy</span>
                        <div className="social-icons">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="icon"
                            />
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="icon"
                            />
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="icon"
                            />
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="icon"
                            />
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="icon"
                            />
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
