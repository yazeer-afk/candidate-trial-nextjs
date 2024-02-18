"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import "./navbar.component.scss";

interface NavbarProps {}

const Navbar = (props: NavbarProps): React.ReactElement => {
    const [show, setShow] = useState(false);
    return (
        <>
            <nav>
                <span className="logo">COMPANY LOGO</span>
                <div className="menu-container">
                    <span
                        onMouseEnter={() => {
                            setShow(true);
                        }}
                        onMouseLeave={() => {
                            setShow(false);
                        }}
                    >
                        About
                    </span>
                    <span>Services</span>
                    <span>FAQs</span>
                    <span>News</span>
                </div>
                <Button label="Contact us" secondary />
            </nav>
            <AnimatePresence>
                {show && (
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
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
