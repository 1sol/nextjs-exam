import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-app",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://10.3.35.194:3000",
    cleartext: true,
  },
};

export default config;
