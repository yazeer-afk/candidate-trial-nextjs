import React from "react";
import { INavStructure } from "@/data/getData";
import useNavStore from "@/store/MobileNavStore";
import { AnimatePresence, motion } from "framer-motion";
import NavSlot from "./NavSlot";

export interface NavMapperProps {
    content: INavStructure[];
}

const NavMapper = ({ content }: NavMapperProps): React.ReactElement => {
    const mainItem = useNavStore((state) => state.mainItem);
    const subItem = useNavStore((state) => state.subItem);

    return (
        <>
            {content.map(({ name, content, id }) => (
                <React.Fragment key={id}>
                    <NavSlot label={name} />
                    <AnimatePresence>
                        {name === mainItem && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "fit-content" }}
                                exit={{ height: 0 }}
                            >
                                {content.map(({ title, items, contentId }) => (
                                    <React.Fragment key={contentId}>
                                        <NavSlot label={title} isSubSlot />
                                        <AnimatePresence>
                                            {subItem === title && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{
                                                        height: "fit-content",
                                                    }}
                                                    exit={{ height: 0 }}
                                                >
                                                    {items.map((link) => (
                                                        <div
                                                            key={link}
                                                            className="slot sub-link"
                                                        >
                                                            <h4>{link}</h4>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </React.Fragment>
            ))}
        </>
    );
};

export default NavMapper;
