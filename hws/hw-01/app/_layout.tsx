import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Другорядна",
                }}
            />

            <Stack.Screen
                name="city"
                options={{
                    title: "Моє мiсто",
                }}
            />

            <Stack.Screen
                name="about"
                options={{
                    title: "Про мене",
                }}
            />
        </Stack>
    );
}
