import { StyleSheet, Pressable, View, ScrollView, Dimensions} from "react-native";
import { Button, Surface, Text, FAB } from "react-native-paper";
import { Link, router } from "expo-router";

import { COLORS, FONT, SIZES} from "../constants";

const window = Dimensions.get('window');
const FAB_SIZE = window.width * 0.4; // Example: FABs are 30% of the screen width
const FAB_RADIUS = FAB_SIZE / 2;
const OFFSET = FAB_SIZE / 14; // Adjust this for the amount of overlap you want

const styles = StyleSheet.create({
    bulbContainer: {
        width: window.width, // Full width of the screen
        height: FAB_SIZE, // Enough height to fit two FABs with some overlap
        position: 'relative', // This is important for absolute positioning of children
    },
    buttonContainer: {
        width: FAB_SIZE,
        height: FAB_SIZE,
        position: 'relative'
    },
    screwContainer: {
        width: FAB_SIZE,
        height: FAB_SIZE,
        position: 'relative'
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
        top: FAB_RADIUS,
        left: window.width / 2 - FAB_SIZE - OFFSET, // Centered and offset left
    },
    fab2: {
        top: FAB_RADIUS,
        right: window.width / 2 - FAB_SIZE - OFFSET, // Centered and offset right
    },
    circle: {
        width: (FAB_SIZE+OFFSET)*2,
        height: (FAB_SIZE+OFFSET)*2,
        borderRadius: FAB_SIZE+OFFSET,
        backgroundColor: COLORS.gray,
        left: window.width / 2 - FAB_SIZE - OFFSET
    },
    calendar: {
        width: FAB_SIZE, 
        height: FAB_SIZE, 
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: window.width / 2 - FAB_RADIUS,
        top: FAB_SIZE
    },
    semiCircle: {
        width: FAB_RADIUS * 2,
        height: FAB_RADIUS,
        borderBottomLeftRadius: FAB_RADIUS,
        borderBottomRightRadius: FAB_RADIUS,
        backgroundColor: COLORS.gray,
        overflow: 'hidden',
        alignSelf: 'center',
        top: FAB_SIZE + OFFSET,
        left: window.width / 2 - FAB_RADIUS,
        // No need for transform here
    },
});

export default function Page() {

  return (
    <ScrollView>
            <Text variant="displayMedium" style={{padding: 10, fontFamily: FONT.bold, fontSize: 45, color: COLORS.primary}}>Welcome back Jay!</Text>
            <View style={styles.bulbContainer}>
                <View style={styles.circle}/>
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
            </View>

            <View style={styles.buttonContainer}>
            <FAB
                    icon="calendar"
                    customSize={FAB_SIZE}
                    style={styles.calendar}
                    onPress={() => router.push("/calendar")}
            />
            </View>
            <View style={styles.screwContainer}>
                <View style={styles.semiCircle} />
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