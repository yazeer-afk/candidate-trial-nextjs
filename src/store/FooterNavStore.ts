import { create } from 'zustand';

interface IFooterState {
    selectedItem: string | undefined;
    setSelectedItem: (item: string | undefined) => void;
}

const useFooterStore = create<IFooterState>((set) => ({
    selectedItem: undefined,
    setSelectedItem: (item) => set((state) => ({selectedItem: state.selectedItem === item ? undefined: item})),
}));

export default useFooterStore;