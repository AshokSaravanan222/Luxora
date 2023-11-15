import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React, { useCallback } from "react";

import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import styles from "./footer.style";

import { COLORS } from "../../../../constants";

const Footer = ({amazonURL, googleURL}) => { // if favorite is true, then we know we have to go the other way
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(amazonURL)}
      >
        <AntDesign name="amazon" size={24} color={COLORS.lightWhite} style={{padding: 10}} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={
          () => Linking.openURL(googleURL)}
      >
        <AntDesign name="google" size={24} color={COLORS.lightWhite} style={{padding: 10}} />
      </TouchableOpacity>
    </View>
    
  );
};

export default Footer;
