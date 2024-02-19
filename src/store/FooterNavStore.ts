import { create } from 'zustand';

interface INavState {
    selectedItem: string | undefined;
    setSelectedItem: (item: string) => void;
}

const useNavStore = create<INavState>((set) => ({
    selectedItem: undefined,
    setSelectedItem: (item) => set((state) => ({selectedItem: state.selectedItem === item ? undefined: item})),
}));

export default useNavStore;