import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES, FONT, COLORS} from "../../../constants";

import SearchButton from "./SearchButton";

const genres = ['Personal Growth', 'Leadership/Management', 'Creativity', 'Finance/Wealth', 'Communication/Relationships',
'Health/Wellness', 'Mindfulness', 'Spirituality'];

import TextTicker from "react-native-text-ticker";

const Welcome = ({ handleSearchClick, cat, gen, name}) => {
  const router = useRouter();
  const [genre, setGenre] = useState("Personal Growth");

  const [title, setTitle] = useState(""); // State for the animated title
  const titleRef = useRef(null);

  useEffect(() => {
    // Simulate a typing animation by updating the title character by character
    const targetTitle = "ReadAI";
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < targetTitle.length) {
        setTitle(targetTitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200); // Adjust the typing speed as needed
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <View>
      <View style={styles.container}>
      <TextTicker
          ref={titleRef}
          style={styles.title}
          duration={4000} // Adjust the duration for animation speed
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
        {title}
      </TextTicker>
        {/* <Text style={styles.userName}>Hello {name}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect book</Text> */}
      </View>

      <SearchButton 
          onPress={handleSearchClick}
      />

      <View style={styles.tabsContainer}>
        <FlatList
          data={genres}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(genre, item)}
              onPress={() => {
                setGenre(item);
                router.push({
                  pathname: `learn/all/${item.replace(/\//g, " ")}`,
                  params: {cat: cat, gen: gen}
                });
              }}
            >
              <Text style={styles.tabText(genre, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
