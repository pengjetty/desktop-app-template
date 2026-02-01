import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type AppTheme = 'light' | 'dark' | 'system';

interface SettingsState {
    // UI State (not persisted usually, but sometimes useful)
    isOpen: boolean;
    activeTab: string;

    // Preferences
    theme: AppTheme;
    enableNotifications: boolean;
    soundEnabled: boolean;

    // Actions
    setIsOpen: (open: boolean) => void;
    setActiveTab: (tab: string) => void;
    setTheme: (theme: AppTheme) => void;
    toggleNotifications: () => void;
    toggleSound: () => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            isOpen: false,
            activeTab: 'general',
            theme: 'system',
            enableNotifications: true,
            soundEnabled: false,

            setIsOpen: (isOpen) => set({ isOpen }),
            setActiveTab: (activeTab) => set({ activeTab }),
            setTheme: (theme) => set({ theme }),
            toggleNotifications: () => set((state) => ({ enableNotifications: !state.enableNotifications })),
            toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
        }),
        {
            name: 'app-settings',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                // We persist preferences, but typically not "isOpen" 
                // unless we want to restore exact state on reload.
                // Let's exclude isOpen for a cleaner start.
                theme: state.theme,
                enableNotifications: state.enableNotifications,
                soundEnabled: state.soundEnabled,
                activeTab: state.activeTab,
            }),
        }
    )
);
