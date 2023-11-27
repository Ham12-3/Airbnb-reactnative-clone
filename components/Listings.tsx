import { View, Text, ListRenderItem } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useState, useRef } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("reload listings: ", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`}>Go there</Link>
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

export default Listings;
