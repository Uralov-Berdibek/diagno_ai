import { create } from 'zustand';

interface HeaderbarMobileStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useHeaderbarMobile = create<HeaderbarMobileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useHeaderbarMobile;
