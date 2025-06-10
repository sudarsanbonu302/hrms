import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const aashdithlogo = require("../assets/images/logo.png");
const { height, width } = Dimensions.get("window");

export default function Index() {
  const route = useRouter();

  const logoScale = useRef(new Animated.Value(1.5)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(0)).current;

  useEffect(() => {
   
    Animated.sequence([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
  
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    
      Animated.timing(slideUp, {
        toValue: -height,
        duration: 800,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Step 4: Redirect after animation
      route.push("/(employee)/employeelogin");
    });
  }, []);

  return (
    <SafeAreaView style={{
      backgroundColor: "#000080",
      width,
      height,
      justifyContent: "flex-start",
      alignItems: "center",
    }}>
      <Animated.View
        style={{
          alignItems: "center",
          paddingTop: verticalScale(200),
          paddingHorizontal: moderateScale(15),
          transform: [{ translateY: slideUp }]
        }}
      >
        <Animated.Image
          source={aashdithlogo}
          style={{
            transform: [{ scale: logoScale }],
            width: scale(120),
            height: verticalScale(120),
            resizeMode: "contain"
          }}
        />
        <Animated.Text style={{
          fontSize: moderateScale(32),
          fontWeight: "bold",
          marginTop: verticalScale(15),
          color: "#FAC11A",
          opacity: textOpacity
        }}>
          AASHDIT
        </Animated.Text>
        <Animated.Text style={{
          fontSize: moderateScale(21),
          fontWeight: "bold",
          color: "#ffffff",
          opacity: textOpacity
        }}>
          HR Management Application
        </Animated.Text>
      </Animated.View>
    </SafeAreaView>
  );
}
