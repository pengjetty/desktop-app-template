import { Store, Monitor, Shield, Sun, Moon, Laptop } from 'lucide-react';
import { useSettingsStore, AppTheme } from '@/store/settings';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ui/theme-provider';

/**
 * Settings Section Component
 * Helper to create consistent sections
 */
const SettingsSection = ({ title, description, children }: { title: string, description?: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <div className="mb-4">
            <h3 className="text-lg font-medium">{title}</h3>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

/**
 * General Settings Tab
 */
const GeneralSettings = () => {
    const {
        theme, setTheme,
        enableNotifications, toggleNotifications,
        soundEnabled, toggleSound
    } = useSettingsStore();

    const { setTheme: setSystemTheme } = useTheme();

    const handleThemeChange = (t: AppTheme) => {
        setTheme(t);
        setSystemTheme(t);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <SettingsSection title="Appearance" description="Customize how the app looks and feels.">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => handleThemeChange('light')}
                        className={cn(
                            "flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-accent transition-colors",
                            theme === 'light' ? "border-primary bg-primary/5 text-primary" : "border-border"
                        )}
                    >
                        <Sun className="h-4 w-4" />
                        <span className="text-sm font-medium">Light</span>
                    </button>

                    <button
                        onClick={() => handleThemeChange('dark')}
                        className={cn(
                            "flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-accent transition-colors",
                            theme === 'dark' ? "border-primary bg-primary/5 text-primary" : "border-border"
                        )}
                    >
                        <Moon className="h-4 w-4" />
                        <span className="text-sm font-medium">Dark</span>
                    </button>

                    <button
                        onClick={() => handleThemeChange('system')}
                        className={cn(
                            "flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-accent transition-colors",
                            theme === 'system' ? "border-primary bg-primary/5 text-primary" : "border-border"
                        )}
                    >
                        <Laptop className="h-4 w-4" />
                        <span className="text-sm font-medium">System</span>
                    </button>
                </div>
            </SettingsSection>

            <SettingsSection title="Notifications" description="Manage how the app alerts you.">
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label>Enable Notifications</Label>
                        <p className="text-xs text-muted-foreground">Receive alerts for important events</p>
                    </div>
                    <Switch checked={enableNotifications} onCheckedChange={toggleNotifications} />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4 mt-2">
                    <div className="space-y-0.5">
                        <Label>Sound Effects</Label>
                        <p className="text-xs text-muted-foreground">Play sounds for interactions</p>
                    </div>
                    <Switch checked={soundEnabled} onCheckedChange={toggleSound} />
                </div>
            </SettingsSection>
        </div>
    );
}

/**
 * Main Settings Page
 */
export const SettingsPage = () => {
    const { activeTab, setActiveTab } = useSettingsStore();

    const tabs = [
        { id: 'general', label: 'General', icon: Store, component: GeneralSettings },
        { id: 'account', label: 'Account', icon: Shield, component: () => <div>Account settings placeholder</div> },
        { id: 'advanced', label: 'Advanced', icon: Monitor, component: () => <div>Advanced settings placeholder</div> },
    ];

    const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || GeneralSettings;

    return (
        <div className="flex h-full w-full gap-0 overflow-hidden bg-background">
            {/* Sidebar */}
            <aside className="w-[200px] border-r bg-muted/30 p-4">
                <div className="mb-6 px-2">
                    <h2 className="text-lg font-semibold tracking-tight">Settings</h2>
                </div>
                <nav className="flex flex-col gap-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-left",
                                activeTab === tab.id ? "bg-accent/80 text-accent-foreground" : "text-muted-foreground"
                            )}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto p-6">
                <div className="max-w-2xl mx-auto">
                    <ActiveComponent />
                </div>
            </main>
        </div>
    );
};
