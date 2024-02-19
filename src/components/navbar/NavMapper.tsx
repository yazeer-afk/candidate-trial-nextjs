import { INavStructure } from "@/data/getData";
import useNavStore from "@/store/MobileNavStore";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import NavSlot from "./NavSlot";
import SubSlot from "./SubSlot";

export interface NavMapperProps {
    content: INavStructure[];
}

const NavMapper = ({ content }: NavMapperProps): React.ReactElement => {
    const mainItem = useNavStore((state) => state.mainItem);
    const subItem = useNavStore((state) => state.subItem);

    return (
        <>
            {content.map(({ name, content }) => (
                <React.Fragment key={name}>
                    <NavSlot label={name} />
                    <AnimatePresence>
                        {name === mainItem && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "fit-content" }}
                                exit={{ height: 0 }}
                            >
                                {content.map(({ title, items }) => (
                                    <React.Fragment key={title}>
                                        <SubSlot title={title} />
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
