import { Tabs } from 'expo-router/tabs';
import { Stack, Drawer} from 'expo-router';

export default function MentalLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="search/index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="all/[id]"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="book-details/[id]"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
  );
}