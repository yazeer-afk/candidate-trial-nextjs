import { create } from 'zustand';

interface INavState {
    mainItem: string | undefined;
    subItem: string | undefined;
    setMainItem: (item: string) => void;
    setSubItem: (item: string) => void;
}

const useNavStore = create<INavState>((set) => ({
    mainItem: undefined,
    subItem: undefined,
    setMainItem: (item) => set((state) => ({mainItem: state.mainItem === item ? undefined: item, subItem: undefined})),
    setSubItem: (item) => set((state) => ({mainItem: state.mainItem, subItem: state.subItem === item ? undefined: item})),
}));

export default useNavStore;