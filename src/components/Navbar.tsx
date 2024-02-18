"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

import "./navbar.component.scss";
import { INavStructure } from "@/data/getData";

interface NavbarProps {
    content: INavStructure[];
}

const Navbar = ({ content }: NavbarProps): React.ReactElement => {
    const [showNav, setShowNav] = useState(false);
    const [selectedContent, setSelectedContent] =
        useState<null | INavStructure>(null);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNav = () => {
        setShowMobileNav((prevValue) => !prevValue);
    };

    const getTitles = () => {
        return content.map(item => {
            return (
                <span
                    key={item.name}
                    onMouseEnter={() => {
                        setShowNav(true);
                        setSelectedContent(item);
                    }}
                    onMouseLeave={() => {
                        setShowNav(false);
                        setSelectedContent(null);
                    }}
                >
                    {item.name}
                </span>
            );
        });
    };

    const getDrawerContent = () => {
        if (!selectedContent) {
            return <></>
        }

        return selectedContent.content.map(link => (
            <div key={link.title} className="drawer-slot">
                <h4>{link.title}</h4>
                {link.items.map(item => <span key={item}>{item}</span>)}
            </div>
        ))
    }

    return (
        <>
            <nav>
                <span className="logo">COMPANY LOGO</span>
                <div className="menu-container">
                    {getTitles()}
                </div>
                <Button label="Contact us" secondary />
                <FontAwesomeIcon
                    icon={faBars}
                    size="2xl"
                    className="nav-icon mobile-nav"
                    onClick={handleMobileNav}
                />
            </nav>
            <AnimatePresence>
                {(showNav && !!selectedContent) ? (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="nav-drawer"
                    >
                        <Image
                            src="/images/drawer-img.png"
                            alt="drawer image"
                            width={300}
                            height={400}
                        />
                        {getDrawerContent()}
                    </motion.div>
                ) : <></>}
            </AnimatePresence>
            <AnimatePresence>
                {showMobileNav && (
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        className="mobile-nav-drawer"
                    >
                        <div className="mobile-drawer-slot">
                            <h4>About</h4>
                            <FontAwesomeIcon
                                icon={faPlus}
                                size="xl"
                                className="nav-icon"
                            />
                        </div>
                        <div className="mobile-drawer-slot">
                            <h4>Services</h4>
                            <FontAwesomeIcon
                                icon={faPlus}
                                size="xl"
                                className="nav-icon"
                            />
                        </div>
                        <div className="mobile-drawer-slot">
                            <h4>FAQs</h4>
                            <FontAwesomeIcon
                                icon={faPlus}
                                size="xl"
                                className="nav-icon"
                            />
                        </div>
                        <div className="mobile-drawer-slot">
                            <h4>News</h4>
                            <FontAwesomeIcon
                                icon={faPlus}
                                size="xl"
                                className="nav-icon"
                            />
                        </div>
                        <Button
                            label="Contact us"
                            secondary
                            className="mobile-nav-btn"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
