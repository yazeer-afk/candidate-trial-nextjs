"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

import "./navbar.component.scss";

interface NavbarProps {}

const Navbar = (props: NavbarProps): React.ReactElement => {
    const [showNav, setShowNav] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileNav = () => {
        setShowMobileNav((prevValue) => !prevValue);
    };

    return (
        <>
            <nav>
                <span className="logo">COMPANY LOGO</span>
                <div className="menu-container">
                    <span
                        onMouseEnter={() => {
                            setShowNav(true);
                        }}
                        onMouseLeave={() => {
                            setShowNav(false);
                        }}
                    >
                        About
                    </span>
                    <span>Services</span>
                    <span>FAQs</span>
                    <span>News</span>
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
                {/* {showNav && ( */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="nav-drawer"
                    >
                        <Image
                            src="/images/column-img-small.png"
                            alt="drawer image"
                            width={300}
                            height={400}
                        />
                        <div className="drawer-slot">
                            <h4>About</h4>
                            <span>About menu item 1</span>
                            <span>About menu item 2</span>
                            <span>About menu item 3</span>
                            <span>About menu item 4</span>
                        </div>
                        <div className="drawer-slot">
                            <h4>About</h4>
                            <span>About menu item 1</span>
                            <span>About menu item 2</span>
                            <span>About menu item 3</span>
                            <span>About menu item 4</span>
                        </div>
                    </motion.div>
                {/* )} */}
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
