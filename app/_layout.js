import { Tabs } from 'expo-router/tabs';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { useFonts } from "expo-font";

//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={paperTheme}>
    <Tabs
    screenOptions={{
        headerStyle: {
          backgroundColor: paperTheme.colors.primaryContainer,
        },
        headerTintColor: paperTheme.colors.primary,
      }}
    >
    <Tabs.Screen
    // Name of the route to hide.
    name="tools"
    options={{
      // This tab will no longer show up in the tab bar.
      title: "Tools",
      tabBarIcon: ({ color, size }) => (
        <Octicons name="tools" size={size} color={color} />
      ),
    }}
  /><Tabs.Screen
    // Name of the route to hide.
    name="index"
    options={{
      // This tab will no longer show up in the tab bar.
      title: "Home",
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="home" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="about"
    options={{
      // This tab will no longer show up in the tab bar.
      title: "About",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="people" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="live"
    options={{
      // This tab will no longer show up in the tab bar.
      href: null,
      title: "Live",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="body" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="learn"
    options={{
      // This tab will no longer show up in the tab bar.
      href: null,
      title: "Learn",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="brain" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    // Name of the route to hide.
    name="love"
    options={{
      // This tab will no longer show up in the tab bar.
      href: null,
      title: "Love",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="heart" size={size} color={color} />
      ),
    }}
  />

<Tabs.Screen
    // Name of the route to hide.
    name="calendar"
    options={{
      // This tab will no longer show up in the tab bar.
      href: null,
      title: "Calendar",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="calendar" size={size} color={color} />
      ),
    }}
  />

  
  
  </Tabs>
    </PaperProvider>
  );
}