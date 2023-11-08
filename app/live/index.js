import { SafeAreaView, View, StyleSheet, TouchableOpacity} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { FoodList, CameraButton } from "../../components";
import { Stack, useRouter, Tabs} from "expo-router";
import { Icon } from "react-native-paper";

const Page = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.secondary },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
              >
                <Icon source="arrow-back" color={COLORS.lightWhite} size={24} />
              </TouchableOpacity>
            ),
            title: "",
          }}
        />
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            paddingBottom: 90, // Add padding to create space for the button
          }}
            >
          <FoodList />
        </View>
        <View style={styles.cameraButtonContainer}>
          <CameraButton />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cameraButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.medium,
    backgroundColor: "transparent",
  }
});

export default Page;