import { View, Text } from "react-native";
import React from "react";

interface Props {
  listings: any[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  return (
    <View>
      <Text>ListingsBottomSheet</Text>
    </View>
  );
};

export default ListingsBottomSheet;
