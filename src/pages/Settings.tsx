import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonToggle,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonNote,
    IonRange,
    IonCheckbox,
    IonRadioGroup,
    IonRadio,
    IonInput,
    IonTextarea,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonAlert,
    IonActionSheet,
    IonPopover,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import {
    notifications,
    moon,
    person,
    shield,
    language,
    storefront,
    colorPalette,
    volumeHigh,
    wifi,
    bluetooth,
    cellular,
    battery,
    settings,
    help,
    logOut,
    chevronForward,
    star,
    save,
    trash
} from 'ionicons/icons';

const SettingsPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrationEnabled, setVibrationEnabled] = useState(true);
    const [language, setLanguage] = useState('en');
    const [fontSize, setFontSize] = useState(14);
    const [autoSync, setAutoSync] = useState(true);
    const [biometricAuth, setBiometricAuth] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [locationServices, setLocationServices] = useState(true);
    const [dataUsage, setDataUsage] = useState('wifi');
    const [theme, setTheme] = useState('auto');
    const [username, setUsername] = useState('john_doe');
    const [email, setEmail] = useState('john@example.com');
    const [bio, setBio] = useState('Mobile app enthusiast');

    const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showActionSheet, setShowActionSheet] = useState(false);

    const handleSaveProfile = () => {
        // Placeholder save logic
        console.log('Profile saved');
    };

    const handleLogout = () => {
        // Placeholder logout logic
        console.log('User logged out');
        setShowLogoutAlert(false);
    };

    const handleDeleteAccount = () => {
        // Placeholder delete account logic
        console.log('Account deleted');
        setShowDeleteAlert(false);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                    <IonButtons slot="end">
                        <IonButton fill="clear" onClick={handleSaveProfile}>
                            <IonIcon icon={save} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                {/* Appearance Section */}
                <IonList>
                    <IonListHeader>
                        <IonLabel>Appearance</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonIcon icon={moon} slot="start" />
                        <IonLabel>Dark Mode</IonLabel>
                        <IonToggle
                            checked={darkMode}
                            onIonToggle={(e) => setDarkMode(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={colorPalette} slot="start" />
                        <IonLabel>Theme</IonLabel>
                        <IonSelect
                            value={theme}
                            onSelectionChange={(e) => setTheme(e.detail.value)}
                            interface="popover"
                        >
                            <IonSelectOption value="light">Light</IonSelectOption>
                            <IonSelectOption value="dark">Dark</IonSelectOption>
                            <IonSelectOption value="auto">Auto</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={settings} slot="start" />
                        <IonLabel>Font Size</IonLabel>
                        <IonRange
                            value={fontSize}
                            min={12}
                            max={20}
                            step={2}
                            snaps={true}
                            ticks={true}
                            onIonInput={(e) => setFontSize(e.detail.value as number)}
                        >
                            <IonLabel slot="start">A</IonLabel>
                            <IonLabel slot="end">A</IonLabel>
                        </IonRange>
                    </IonItem>
                </IonList>

                {/* Notifications Section */}
                <IonList>
                    <IonListHeader>
                        <IonLabel>Notifications</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonIcon icon={notifications} slot="start" />
                        <IonLabel>Enable Notifications</IonLabel>
                        <IonToggle
                            checked={notifications}
                            onIonToggle={(e) => setNotifications(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem disabled={!notifications}>
                        <IonLabel>Push Notifications</IonLabel>
                        <IonToggle
                            checked={pushNotifications}
                            onIonToggle={(e) => setPushNotifications(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem disabled={!notifications}>
                        <IonLabel>Email Notifications</IonLabel>
                        <IonToggle
                            checked={emailNotifications}
                            onIonToggle={(e) => setEmailNotifications(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={volumeHigh} slot="start" />
                        <IonLabel>Sound</IonLabel>
                        <IonToggle
                            checked={soundEnabled}
                            onIonToggle={(e) => setSoundEnabled(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Vibration</IonLabel>
                        <IonToggle
                            checked={vibrationEnabled}
                            onIonToggle={(e) => setVibrationEnabled(e.detail.checked)}
                        />
                    </IonItem>
                </IonList>

                {/* Privacy & Security */}
                <IonList>
                    <IonListHeader>
                        <IonLabel>Privacy & Security</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonIcon icon={shield} slot="start" />
                        <IonLabel>Biometric Authentication</IonLabel>
                        <IonToggle
                            checked={biometricAuth}
                            onIonToggle={(e) => setBiometricAuth(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Two-Factor Authentication</IonLabel>
                        <IonToggle
                            checked={twoFactorAuth}
                            onIonToggle={(e) => setTwoFactorAuth(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel>Location Services</IonLabel>
                        <IonToggle
                            checked={locationServices}
                            onIonToggle={(e) => setLocationServices(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem button>
                        <IonLabel>Change Password</IonLabel>
                        <IonIcon icon={chevronForward} slot="end" />
                    </IonItem>

                    <IonItem button>
                        <IonLabel>Privacy Policy</IonLabel>
                        <IonIcon icon={chevronForward} slot="end" />
                    </IonItem>
                </IonList>

                {/* Data & Storage */}
                <IonList>
                    <IonListHeader>
                        <IonLabel>Data & Storage</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonIcon icon={wifi} slot="start" />
                        <IonLabel>Auto Sync</IonLabel>
                        <IonToggle
                            checked={autoSync}
                            onIonToggle={(e) => setAutoSync(e.detail.checked)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonIcon icon={cellular} slot="start" />
                        <IonLabel>Data Usage</IonLabel>
                        <IonSegment
                            value={dataUsage}
                            onIonChange={(e) => setDataUsage(e.detail.value!)}
                        >
                            <IonSegmentButton value="wifi">
                                <IonLabel>WiFi Only</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="cellular">
                                <IonLabel>WiFi + Cellular</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonItem>

                    <IonItem button>
                        <IonIcon icon={storefront} slot="start" />
                        <IonLabel>Clear Cache</IonLabel>
                        <IonNote slot="end">125 MB</IonNote>
                    </IonItem>
                </IonList>

                {/* General */}
                <IonList>
                    <IonListHeader>
                        <IonLabel>General</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonIcon icon={language} slot="start" />
                        <IonLabel>Language</IonLabel>
                        <IonSelect
                            value={language}
                            onSelectionChange={(e) => setLanguage(e.detail.value)}
                            interface="action-sheet"
                        >
                            <IonSelectOption value="en">English</IonSelectOption>
                            <IonSelectOption value="es">Spanish</IonSelectOption>
                            <IonSelectOption value="fr">French</IonSelectOption>
                            <IonSelectOption value="de">German</IonSelectOption>
                            <IonSelectOption value="zh">Chinese</IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonItem button>
                        <IonIcon icon={help} slot="start" />
                        <IonLabel>Help & Support</IonLabel>
                        <IonIcon icon={chevronForward} slot="end" />
                    </IonItem>

                    <IonItem button>
                        <IonIcon icon={star} slot="start" />
                        <IonLabel>Rate App</IonLabel>
                        <IonIcon icon={chevronForward} slot="end" />
                    </IonItem>

                    <IonItem button onClick={() => setShowActionSheet(true)}>
                        <IonIcon icon={settings} slot="start" />
                        <IonLabel>More Options</IonLabel>
                        <IonIcon icon={chevronForward} slot="end" />
                    </IonItem>
                </IonList>

                {/* Account Actions */}
                <IonList>
                    <IonListHeader>
                        <IonLabel>Account</IonLabel>
                    </IonListHeader>

                    <IonItem button onClick={() => setShowLogoutAlert(true)}>
                        <IonIcon icon={logOut} slot="start" color="medium" />
                        <IonLabel>Sign Out</IonLabel>
                    </IonItem>

                    <IonItem button onClick={() => setShowDeleteAlert(true)}>
                        <IonIcon icon={trash} slot="start" color="danger" />
                        <IonLabel color="danger">Delete Account</IonLabel>
                    </IonItem>
                </IonList>

                {/* Version Info */}
                <div style={{ textAlign: 'center', padding: '20px', color: 'var(--ion-color-medium)' }}>
                    <p>App Version 1.0.0</p>
                    <p>Build 2025.09.03</p>
                </div>

                {/* Logout Confirmation Alert */}
                <IonAlert
                    isOpen={showLogoutAlert}
                    onDidDismiss={() => setShowLogoutAlert(false)}
                    header="Sign Out"
                    message="Are you sure you want to sign out?"
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel'
                        },
                        {
                            text: 'Sign Out',
                            handler: handleLogout
                        }
                    ]}
                />

                {/* Delete Account Confirmation Alert */}
                <IonAlert
                    isOpen={showDeleteAlert}
                    onDidDismiss={() => setShowDeleteAlert(false)}
                    header="Delete Account"
                    message="This action cannot be undone. Are you sure you want to permanently delete your account?"
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel'
                        },
                        {
                            text: 'Delete',
                            handler: handleDeleteAccount,
                            cssClass: 'alert-button-danger'
                        }
                    ]}
                />

                {/* Action Sheet for More Options */}
                <IonActionSheet
                    isOpen={showActionSheet}
                    onDidDismiss={() => setShowActionSheet(false)}
                    header="More Options"
                    buttons={[
                        {
                            text: 'Export Data',
                            icon: save,
                            handler: () => {
                                console.log('Export data');
                            }
                        },
                        {
                            text: 'Import Settings',
                            icon: settings,
                            handler: () => {
                                console.log('Import settings');
                            }
                        },
                        {
                            text: 'Reset to Default',
                            icon: trash,
                            handler: () => {
                                console.log('Reset to default');
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel'
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    );
};

export default SettingsPage;