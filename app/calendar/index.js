import { ScrollView } from "react-native";
import { useState, useRef, useEffect } from "react";
import TextTicker from "react-native-text-ticker";

import {Calendar } from 'react-native-calendars';
import { COLORS, FONT, SIZES } from "../../constants";

import { Text } from "react-native-paper";

export default function Page() {

  const [title, setTitle] = useState(""); // State for the animated title
  const titleRef = useRef(null);

  useEffect(() => {
    // Simulate a typing animation by updating the title character by character
    const targetTitle = "Calendar";
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
    <ScrollView >
      <TextTicker
          ref={titleRef}
          style={{
            fontFamily: FONT.bold,
            fontSize: SIZES.xxLarge,
            color: COLORS.primary,
          }}
          duration={4000} // Adjust the duration for animation speed
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
        {title}
      </TextTicker>
      <Calendar
      // Customize the appearance of the calendar
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
      }}
      // Specify the current date
      current={'2023-11-15'}
      // Callback that gets called when the user selects a day
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Mark specific dates as marked
      markedDates={{
        '2012-03-01': {selected: true, marked: true, selectedColor: 'blue'},
        '2012-03-02': {marked: true},
        '2012-03-03': {selected: true, marked: true, selectedColor: 'blue'}
      }}
    />
    <Text>We are still working on our app! Let us know what you would want on this page!</Text>
  </ScrollView>
  );
}