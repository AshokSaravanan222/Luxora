import { Tabs } from 'expo-router/tabs';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme} from 'react-native';

import { Drawer } from 'expo-router/drawer';

import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { useFonts } from "expo-font";

import { COLORS } from '../constants';

//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons, AntDesign, Feather} from '@expo/vector-icons'; 


//buttons
import { TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, useNavigation} from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const router = useRouter();

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
      <Drawer screenOptions={({ route }) => ({
        drawerIcon: () => {
          const icons = {
            home: 'home',
            tools: 'tools',
            about: 'account'
          };

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={paperTheme.colors.primary}
              size={24}
            />
          );
        },
        headerLeft: () => (
          <DrawerToggleButton 
            tintColor={paperTheme.colors.primary}
          />
        ),
        headerRight: () => (
          <Feather name="settings" size={24} color={paperTheme.colors.primary} style={{padding: 10}} onPress={() => router.back()}/>
        ),
        headerTitle: "",
        headerStyle: { backgroundColor: paperTheme.colors.primaryContainer},
        drawerStyle: {backgroundColor: paperTheme.colors.background},
        drawerActiveTintColor: paperTheme.colors.primary,
        drawerInactiveTintColor: paperTheme.colors.secondary
  })}>
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
        }}
        

      />
      <Drawer.Screen
        name="tools" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tools",
        }}
      />
      <Drawer.Screen
        name="about" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "About Us",
        }}
      />
      <Drawer.Screen
        // Name of the route to hide.
            name="index"
            options={{
                drawerItemStyle: {width: 0},
                drawerLabel: () => null,
            href: null,
            }}
        />
    </Drawer>

    
    </PaperProvider>
  );
}