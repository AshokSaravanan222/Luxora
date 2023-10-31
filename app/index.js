import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
        <Text>Welcome back Jay!</Text>
        <Link href="/physical" asChild>
        <Pressable>
            <Text>Physical</Text>
        </Pressable>
        </Link>
    </View>
  );
}