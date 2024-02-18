"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

import "./navbar.component.scss";
import variables from '../variables.module.scss';
import { INavStructure } from "@/data/getData";

interface NavbarProps {
    content: INavStructure[];
}

interface IMobileNavSelection {
    mainItem: null | string;
    subItem: null | string;
}

const Navbar = ({ content }: NavbarProps): React.ReactElement => {
    const {primaryColor, primaryBackground, textColor, secondaryColor, whiteColor} = variables;
    const [showNav, setShowNav] = useState(false);
    const [selectedContent, setSelectedContent] =
        useState<null | INavStructure>(null);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [selectedItem, setSelectedItem] = useState<IMobileNavSelection>({
        mainItem: null,
        subItem: null,
    });

    const handleMobileNav = () => {
        setShowMobileNav((prevValue) => !prevValue);
    };

    const lineVariant: Variants = {
        initial: { width: 0 },
        animate: { width: "100%" },
    };

    const getTitles = () => {
        return content.map((item) => {
            return (
                <motion.div
                    initial="initial"
                    animate="initial"
                    whileHover="animate"
                    className="menu-item"
                >
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
                    <motion.div variants={lineVariant} className="underline" />
                </motion.div>
            );
        });
    };

    const getDrawerContent = () => {
        if (!selectedContent) {
            return <></>;
        }

        return selectedContent.content.map((link) => (
            <div key={link.title} className="drawer-slot">
                <h4>{link.title}</h4>
                {link.items.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        ));
    };

    const getMobileSlots = () => {
        return content.map((item) => {
            const isMainSelected = selectedItem.mainItem === item.name; 
            const fontColor = isMainSelected ? primaryColor : textColor;
            const secondaryBg = isMainSelected ? secondaryColor : whiteColor;

            return (
                <React.Fragment key={item.name}>
                    <div className="slot" style={{background: secondaryBg}}>
                        <h4 style={{color: fontColor}}>{item.name}</h4>
                        <FontAwesomeIcon
                            icon={isMainSelected ? faMinus: faPlus}
                            size="xl"
                            className="nav-icon"
                            onClick={() => setSelectedItem({mainItem: isMainSelected ? null : item.name, subItem: null})}
                        />
                    </div>
                    {isMainSelected && item.content.map(subheader => {
                        const isSubSelected = selectedItem.subItem === subheader.title;
                        const fontWeight = isSubSelected ? 600 : 500;
                        let primaryBg = isSubSelected ? primaryBackground : secondaryColor;

                        return (
                            <div key={subheader.title}>
                                <motion.div className="slot sub-slot" style={{background: primaryBg}}>
                                    <h4 style={{fontWeight}}>{subheader.title}</h4>
                                    <FontAwesomeIcon
                                        icon={isSubSelected ? faMinus: faPlus}
                                        size="xl"
                                        className="nav-icon"
                                        onClick={() => setSelectedItem({mainItem: item.name, subItem: isSubSelected ? null : subheader.title})}
                                    />
                                </motion.div>
                                <div>
                                    {(isMainSelected && isSubSelected) && subheader.items.map(link => (
                                        <div key={link} className="slot sub-link">
                                            <h4>{link}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </React.Fragment>
            )
        });
    };

    return (
        <>
            <nav>
                <span className="logo">COMPANY LOGO</span>
                <div className="menu-container">{getTitles()}</div>
                <Button label="Contact us" secondary />
                <FontAwesomeIcon
                    icon={faBars}
                    size="2xl"
                    className="nav-icon mobile-nav"
                    onClick={handleMobileNav}
                />
            </nav>
            <AnimatePresence>
                {showNav && !!selectedContent ? (
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
                ) : (
                    <></>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showMobileNav && (
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        className="mobile-nav-drawer"
                    >
                        <>
                            {getMobileSlots()}
                            <Button
                                label="Contact us"
                                secondary
                                className="mobile-nav-btn"
                            />
                        </>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
