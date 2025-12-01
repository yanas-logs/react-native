import "../global.css";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "gluestack-ui";
import { config } from "gluestack-ui/config";

export default function RootLayout() {
  return (
    <GluestackUIProvider config={config}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}
