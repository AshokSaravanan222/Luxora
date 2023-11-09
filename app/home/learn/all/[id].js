import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Text, SafeAreaView } from 'react-native';
import useFetch from '../../../../hook/useFetch';

import NearbyJobCard from "../../../../components/learn/cards/nearby/NearbyJobCard";
import { COLORS, SIZES } from '../../../../constants';
import styles from '../../../../styles/search';

import { Ionicons } from '@expo/vector-icons';

const AllBooks = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { cat, gen } = params;

    const { data, isLoading, error } = useFetch(`/getBooks/${params.id === "top" ? "top" : `category/${params.id}`}`, {
        cat: cat,
        gen: gen,
      });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        book={item}
                        handleNavigate={() => router.push({
                            pathname: `(drawer)/home/book-details/${item.id}`,
                            params: {cat: cat, gen: gen}
                        })}
                    />
                )}
                keyExtractor={(book) => book.id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>All Books</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {isLoading ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : error && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    )
}

export default AllBooks;