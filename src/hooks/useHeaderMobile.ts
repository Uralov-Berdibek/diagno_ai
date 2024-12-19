import { create } from 'zustand';

interface HeaderMobileStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useHeaderMobile = create<HeaderMobileStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useHeaderMobile;
