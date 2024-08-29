import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="monday" />
      <Stack.Screen name="tuesday" />
      <Stack.Screen name="thursday" />
      <Stack.Screen name="friday" />
    </Stack>
  );
}
