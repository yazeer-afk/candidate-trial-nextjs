"use client";

import React from "react";
import FooterSlot from "./FooterSlot";
import { AnimatePresence, motion } from "framer-motion";

import { IFooterStructure } from "@/data/getData";
import useFooterStore from "@/store/FooterNavStore";

export interface FooterMapperProps {
    items: IFooterStructure[];
}

const FooterMapper = ({ items }: FooterMapperProps): React.ReactElement => {
    const { selectedItem } = useFooterStore((state) => state);

    return (
        <>
            {items.map(({ label, content, id }) => (
                <React.Fragment key={id}>
                    <FooterSlot label={label} />
                    <AnimatePresence>
                        {label === selectedItem && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "fit-content" }}
                                exit={{ height: 0 }}
                            >
                                {content.map((item) => (
                                    <div key={item} className="footer-link">
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </React.Fragment>
            ))}
        </>
    );
};

export default FooterMapper;
