import React from 'react';
import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity, SafeAreaView, Image} from "react-native";
import { COLORS, FONT, SIZES } from '../../constants';

import { Avatar } from 'react-native-paper';
import { Stack } from 'expo-router';

import {images} from "../../constants"

// const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

const AboutPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.secondary },
        headerShadowVisible: false,
        title: "",
      }}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      <Text style={styles.title}>About Us</Text>
      <View>
      <Avatar.Image size={150} source={images.logo} />
      </View>

      {/* Why Read-AI Section */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Why Luxora?</Text>
        <Text style={styles.text}>
          We started Luxora to help people lead better lives in a truly personalized manner. We hope to expand our societal impact, getting people to start their journey to knowlegde/learning making the world a more educated place.

        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Our Mission</Text>
        <Text style={styles.text}>
          We are Jay Kim and Ashok Saravanan, the co-founders of Luxora. We are passionate about personal growth, lifelong learning and spiritual fulfillment.
        </Text>
      </View>

      {/* Jay Kim Section */}
      <View style={styles.section}>
      <Avatar.Image size={150} source={{uri: "https://media.licdn.com/dms/image/D5603AQEY8mXvu8CBUw/profile-displayphoto-shrink_400_400/0/1665468414114?e=1704931200&v=beta&t=ZL0plSDtSvEspFPzyTT4XwztNP1xEFsTSK5nuc6HxL8"}} />
      <View>
        <Text style={styles.subtitle}>Jay Kim</Text>
      </View>
        <View style={styles.profileContainer}>
          <Text style={styles.text}>
            Jay is an ambitious learner who wants to change the world. He strongly belives in hard work and develops his disipline daily toward his goals.
          </Text>
        </View>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/omrajpal/')}>
            {/* <AnimatedIcon name='linkedin' type='font-awesome' color='#0077B5' animation="bounceIn" delay={500} /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/OmRajpal')}>
            {/* <AnimatedIcon name='twitter' type='font-awesome' color='#1DA1F2' animation="bounceIn" delay={700} /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Ashok Saravanan Section */}
      <View style={styles.section}>
      <Avatar.Image size={150} source={{uri: "https://media.licdn.com/dms/image/D5603AQGCf7AoRM6K3w/profile-displayphoto-shrink_400_400/0/1693908631125?e=1704326400&v=beta&t=O_jvlCX0ldLJWm3-c4buGZ7RUuvftAUL7EmXaB2xc-Y"}} />
        <Text style={styles.subtitle}>Ashok Saravanan</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.text}>
            Ashok is an avid reader and a data scientist. He believes that everyone can achieve greater heights through self-learning and continuous improvement.
          </Text>
        </View>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ashok-saravanan/')}>
            {/* <AnimatedIcon name='linkedin' type='font-awesome' color='#0077B5' animation="bounceIn" delay={500} /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/AshokSaravanan')}>
            {/* <AnimatedIcon name='twitter' type='font-awesome' color='#1DA1F2' animation="bounceIn" delay={700} /> */}
          </TouchableOpacity>
        </View>
        
      </View>

      
      {/* <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} onPress={() => Linking.openURL('mailto:readai.company@gmail.com')}>
          <ButtonText>Contact Us </ButtonText>
          <ButtonIcon as={MailIcon} />
        </Button> */}

      </View>
    </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: { //here
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  subheading: { // here
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: { // here
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    fontWeight: 'bold',
    marginTop: 20,
  },
  section: {
    marginVertical: 10,
  },
  text: { // here
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    lineHeight: 24,
    marginVertical: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});

export default AboutPage;