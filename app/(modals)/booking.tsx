import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Page = () => {
  const router = useRouter();

  const [openCard, setOpenCard] = useState(0);

  const [selectedPlace, setSelectedPlace] = useState(0);

  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
  };

  return (
    <BlurView intensity={70} style={styles.container} tint="light">
      {/* Where  */}
      <View style={styles.card}>
        {openCard != 0 && (
          <AnimatedTouchableOpacity
            style={styles.cardPreview}
            onPress={() => setOpenCard(0)}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}
      </View>

      {/* When  */}

      <View style={styles.card}>
        {openCard != 1 && (
          <AnimatedTouchableOpacity
            style={styles.cardPreview}
            onPress={() => setOpenCard(1)}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}
      </View>

      {/* Who  */}
      <View style={styles.card}>
        {openCard != 2 && (
          <AnimatedTouchableOpacity
            style={styles.cardPreview}
            onPress={() => setOpenCard(2)}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewDate}>Add guets</Text>
          </AnimatedTouchableOpacity>
        )}
      </View>

      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={onClearAll}
            style={{ justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "mon-sb",
                textDecorationLine: "underline",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
            onPress={() => router.back()}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={"#fff"}
              style={[defaultStyles.btnIcon]}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  previewDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.dark,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Page;
