import { create } from 'zustand';

interface SidebarMobileStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSidebarMobile = create<SidebarMobileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSidebarMobile;
