import { StyleSheet, Pressable, View, ScrollView } from "react-native";
import { Button, Surface, Text, FAB } from "react-native-paper";
import { Link, router } from "expo-router";

import { useTheme } from 'react-native-paper';


import Svg, { Circle } from 'react-native-svg';

export default function Page() {
    const theme = useTheme();

  return (
    <ScrollView>
        <Text variant="displayMedium">Welcome back Jay!</Text>
        <Link href="/physical" asChild>
            <Pressable>
                <Surface style={styles.surface} elevation={4}>
                    <Text variant="titleLarge">Physical</Text>
                </Surface>
            </Pressable>
        </Link>

        <Button icon="calendar">
            Calendar
        </Button>

            <FAB
                icon="bee"
                label="Physical"
                style={styles.fab}
                customSize={300}
                onPress={() => router.push("/physical")}
            />
            <FAB
                icon="account"
                style={styles.fab}
                customSize={300}
                onPress={() => router.push("/physical")}
            />

            <FAB
                icon="account"
                style={styles.fab}
                customSize={300}
                onPress={() => router.push("/physical")}
            />

        <Text variant="displayLarge">Display Large</Text>
    <Text variant="displayMedium">Display Medium</Text>
    <Text variant="displaySmall">Display small</Text>

    <Text variant="headlineLarge">Headline Large</Text>
    <Text variant="headlineMedium">Headline Medium</Text>
    <Text variant="headlineSmall">Headline Small</Text>

    <Text variant="titleLarge">Title Large</Text>
    <Text variant="titleMedium">Title Medium</Text>
    <Text variant="titleSmall">Title Small</Text>

    <Text variant="bodyLarge">Body Large</Text>
    <Text variant="bodyMedium">Body Medium</Text>
    <Text variant="bodySmall">Body Small</Text>

    <Text variant="labelLarge">Label Large</Text>
    <Text variant="labelMedium">Label Medium</Text>
    <Text variant="labelSmall">Label Small</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    surface: {
      padding: 8,
      height: 300,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 300,
    },
    fab: {
        width: 300,
        height: 300,
        borderRadius: 150, // Ensure this is half of the width and height
      },
  });