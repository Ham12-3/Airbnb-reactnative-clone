import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const listing = (listingsData as any[]).find((item) => item.id === id);

  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
