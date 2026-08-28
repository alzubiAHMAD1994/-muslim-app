import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.muslimapp.app',
  appName: 'Muslim App',
  webDir: '.',
  server: {
    androidScheme: 'https'
  }
};

export default config;
