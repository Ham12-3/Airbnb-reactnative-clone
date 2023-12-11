import {
  View,
  Text,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useState, useRef } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

interface Props {
  listings: any[];
  category: string;
  refresh: number;
}

const Listings = ({ listings: items, category, refresh }: Props) => {
  const [loading, setLoading] = useState(false);

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    if (refresh) {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }, [refresh]);

  useEffect(() => {
    console.log("reload listings: ", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <View style={styles.listing}>
            <Image source={{ uri: item.medium_url }} style={styles.image} />
            <TouchableOpacity
              style={{ position: "absolute", right: 30, top: 30 }}
            >
              <Ionicons name="heart-outline" size={24} color={"#000"} />
            </TouchableOpacity>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16, fontFamily: "mon-sb" }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Ionicons name="star" size={16} />
                <Text style={{ fontFamily: "mon-sb" }}>
                  {item.review_scores_rating / 20}
                </Text>
              </View>
            </View>

            <Text style={{ fontFamily: "mon" }}>{item.room_type}</Text>

            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontFamily: "mon-sb" }}>£ {item.price}</Text>
              <Text style={{ fontFamily: "mon" }}>night</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        data={loading ? [] : items}
        ref={listRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    paddingLeft: 5,
    paddingHorizontal: 5,
    gap: 10,
    marginVertical: 9,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default Listings;
