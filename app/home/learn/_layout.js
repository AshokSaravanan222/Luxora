import { Tabs } from 'expo-router/tabs';
import { Stack } from 'expo-router';
export default function MentalLayout() {
  return (
    <Tabs>
      
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
  );
}