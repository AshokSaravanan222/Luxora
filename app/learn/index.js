import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, ActivityIndicator, Modal, Text, TouchableOpacity, Linking } from "react-native";
import { Stack, useRouter} from "expo-router";
import { Drawer } from "expo-router/drawer";

import { COLORS, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  Welcome,
} from "../../components";
import { AntDesign } from '@expo/vector-icons';



const Page = () => {
  const router = useRouter();

  const [name, setName] = useState("Ashok Saravanan");
  const [cat, setCat] = useState("123451234512345123454444");
  const [gen, setGen] = useState("555");

    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            handleSearchClick={() => {
              router.push({
                pathname: "learn/search",
                params: {cat: cat, gen: gen}
              });
            }}
            cat={cat}
            gen={gen}
            name={name}
          />

          <Popularjobs 
            cat={cat}
            gen={gen}
          />

          <Nearbyjobs 
            cat={cat}
            gen={gen}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )};

export default Page;