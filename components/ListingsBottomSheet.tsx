import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import Colors from "@/constants/Colors";

interface Props {
  listings: any[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["10%", "100%"], []);

  return (
    <BottomSheet
      index={1}
      enablePanDownToClose={false}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
    >
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} />
        <View style={styles.absoluteBtn}></View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
});

export default ListingsBottomSheet;
