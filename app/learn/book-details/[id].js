import { Stack, useRouter, useLocalSearchParams, Tabs} from "expo-router";
import { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
  Linking,
} from "react-native";

import {
  Book,
  JobFooter,
  JobTabs,
  SimilarBooks,
  Score,
  Header
} from "../../../components";
import { COLORS, icons, SIZES, FONT } from "../../../constants";
import useFetch from "../../../hook/useFetch";

import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { StyleSheet } from "react-native";

const tabs = ["General Info", "Score", "Similar Books"];

const tabStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.darkGray,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: COLORS.darkGray,
  },
  linkText: {
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  section: {
    marginVertical: 10,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarText: {
    marginLeft: 10,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  tabText: {
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
});

const searchStyles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 25, // Rounded corners to make it pill-shaped
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.lightWhite,
    fontSize: 16,
    marginLeft: 10,
  },icon: {
    marginRight: 10, // Add some margin to the right of the icon
  },
});

const getIcon = (category) => {
  switch (category) {
    case 'Personal Growth':
      return <FontAwesome5 name="running" size={24} color={COLORS.lightWhite} />;
    case 'Leadership Management':
      return <Ionicons name="people" size={24} color={COLORS.lightWhite} />;
    case 'Creativity':
      return <MaterialCommunityIcons name="drawing-box" size={24} color={COLORS.lightWhite} />;
    case 'Finance Wealth':
      return <MaterialCommunityIcons name="account-cash" size={24} color={COLORS.lightWhite} />;
    case 'Communication Relationships':
      return <MaterialCommunityIcons name="account-heart" size={24} color={COLORS.lightWhite} />;
    case 'Health Wellness':
      return <FontAwesome5 name="apple-alt" size={24} color={COLORS.lightWhite} />;
    case 'Mindfulness':
      return <MaterialCommunityIcons name="meditation" size={24} color={COLORS.lightWhite} />;
    case 'Spirituality':
      return <FontAwesome5 name="peace" size={24} color={COLORS.lightWhite} />;
    default:
      return null;
  }
};

const BookDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [cat, setCat] = useState("");
  const [gen, setGen] = useState("");

  const [book, setBook] = useState(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch() // for API
    setRefreshing(false);
  }, []);

  // Hooks

  const { data, isLoading: apiIsLoading, error, refetch } = useFetch(`/getBooks/${params.id}`, { cat, gen });
  

  // Load initial data and set states
  const initializeData = useCallback(async () => {
    try {
        
      setCat("123451234512345123454444");
      setGen("555");

    } catch (error) {
      console.error("An error occurred while initializing data:", error);
      // Optionally set an error state to display an error message to the user
    }
  }, []); // If you use any external values in this function, they should be added to the dependency array

  useEffect(() => {
    initializeData();
  }, [initializeData]); // Run this effect when the component mounts

  useEffect(() => {
    if (data?.length != 0) {
      // When API is not loading and data is available, update the book data
      setBook(data[0]);

      setIsLoading(false); // Set loading to false since data is loaded

       // handling review
    }
  }, [apiIsLoading]); // This effect runs whenever the loading state or data from the API changes

  const displayTabContent = () => {
    switch (activeTab) {
      case "General Info":
        return (
          <View style={tabStyles.container}>
            <View style={tabStyles.section}>
              <Text style={tabStyles.header}>Authors</Text>
                  <FlatList
                    data={book.authors}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={tabStyles.tab}
                        onPress={
                          () => Linking.openURL(`https://www.google.com/search?q=${item}`)
                        }
                      >
                        <Text style={tabStyles.tabText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                  />
            </View>

            

            <View style={tabStyles.section}>
              <Text style={tabStyles.header}>Genres</Text>
                  <FlatList
                    data={book.genre}
                    renderItem={({ item }) => (
                      <TouchableOpacity 
                        style={searchStyles.buttonContainer} 
                        onPress={() => {
                          router.push({
                            pathname: `learn/all/${item}`,
                            params: {cat: cat, gen: gen}
                          });
                        }}
                      >
                        {getIcon(item)}
                        <Text style={searchStyles.buttonText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                  />
            </View>

            <View style={tabStyles.section}>
              <Text style={tabStyles.header}>Description</Text>
              <Text style={tabStyles.text}>{book.description}</Text>
            </View>
               
            <View style={tabStyles.section}>
              <Text style={tabStyles.header}>Details</Text>
              <Text style={tabStyles.text}>Number of Pages: {book.pageCount === 0 ? "Unknown" : book.pageCount}</Text>
              <Text style={tabStyles.text}>ISBN: {book.isbn13 === "N/A" ? "Unknown" : book.isbn13}</Text>
              <Text style={tabStyles.text}>Publisher/Date: {book.publisher  === "N/A" ? "Unknown" : book.publisher} {book.publishedDate  === "N/A" ? "Unknown" : book.publishedDate}</Text>
            </View>

            
          </View>
        );

      case "Score":
        return (
          <Score 
            score={Math.ceil(book.score[0])}
          />
        );

      case "Similar Books":
        return (
          <SimilarBooks
            cat={cat}
            gen={gen}
            book_id={book.id}
          />
        );

      default:
        return null;
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Tabs.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.secondary },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            ><Ionicons name="arrow-back" size={24} color={COLORS.lightWhite} style={{padding: 10}} /></TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => Linking.openURL(`https://www.amazon.com/s?k=${book?.title}`)}
            ><AntDesign name="amazon" size={24} color={COLORS.lightWhite} style={{padding: 10}} /></TouchableOpacity>  
          ),
          headerTitle: "",
        }}
      />
  
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading || typeof book === "undefined"? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100}}>
            <Header />
              <Book
                score={book.score}
                bookLogo={book.thumbnail}
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
                rating={book.averageRating}
                ratingsCount={book.ratingsCount}
                description={book.description}
                genre={book.genre}
                pageCount={book.pageCount}
                isbn={book.isbn13}
                publisher={book.publisher}
                publishedDate={book.publishedDate}
                country={book.country}
              />
              {/* <LikedReccomendationSlider /> */}
              <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
        amazonURL={`https://www.amazon.com/s?k=${book?.title}`}
        googleURL={
            book?.buyLink === "N/A"
              ? `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(
                  book?.title
                )}`
              : book?.buyLink
          }
        />
      </>
    </SafeAreaView>
  );
  
};

export default BookDetails;
