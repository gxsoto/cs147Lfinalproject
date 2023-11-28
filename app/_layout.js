import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* show all headers except the one for the index/main page screenOptions={{ headerShown: true }}*/}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
