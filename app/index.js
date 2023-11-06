import { StyleSheet, Pressable, View, ScrollView, Dimensions} from "react-native";
import { Button, Surface, Text, FAB } from "react-native-paper";
import { Link, router } from "expo-router";

import { useTheme} from 'react-native-paper';


const window = Dimensions.get('window');
const FAB_SIZE = window.width * 0.4; // Example: FABs are 30% of the screen width
const FAB_RADIUS = FAB_SIZE / 2;
const OFFSET = FAB_SIZE / 14; // Adjust this for the amount of overlap you want

const styles = StyleSheet.create({
    vennDiagramContainer: {
        width: window.width, // Full width of the screen
        height: FAB_SIZE * 2, // Enough height to fit two FABs with some overlap
        position: 'relative', // This is important for absolute positioning of children
    },
    fab: {
        width: FAB_SIZE,
        height: FAB_SIZE,
        borderRadius: FAB_SIZE,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab1: {
        top: 0,
        left: window.width / 2 - FAB_SIZE - OFFSET, // Centered and offset left
    },
    fab2: {
        top: 0,
        right: window.width / 2 - FAB_SIZE - OFFSET, // Centered and offset right
    },
    fab3: {
        top: FAB_SIZE, // Offset down to create the Venn diagram effect
        left: window.width / 2 - FAB_RADIUS, // Centered horizontally
    },
    buttonContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
    // Other styles...
});

export default function Page() {
    const theme = useTheme();

  return (
    <ScrollView>
            <Text variant="displayMedium" style={{padding: 10}}>Welcome back Jay!</Text>
            <View style={styles.vennDiagramContainer}>
                <FAB
                    icon="book"
                    style={[styles.fab, styles.fab1]}
                    customSize={FAB_SIZE}
                    onPress={() => router.push("/learn")}
                />

                <FAB
                    icon="run"
                    style={[styles.fab, styles.fab2]}
                    customSize={FAB_SIZE}
                    onPress={() => router.push("/live")}
                />

                <FAB
                    icon="heart"
                    style={[styles.fab, styles.fab3]}
                    customSize={FAB_SIZE}
                    onPress={() => router.push("/love")}
                />
            </View>

            <View style={styles.buttonContainer}>
            <FAB
                    icon="calendar"
                    label={"Calendar"}
                    style={{width: FAB_SIZE*2, borderColor: 'red', backgroundColor: 'white'}}
                    onPress={() => router.push("/physical")}
            />
            </View>

        {/* <Text variant="displayLarge">Display Large</Text>
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
        <Text variant="labelSmall">Label Small</Text> */}

    </ScrollView>
  );
}