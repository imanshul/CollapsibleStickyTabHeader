import { RefObject } from "react";
import { FlatList } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type ScrollPair = {
  list: RefObject<FlatList | null>;
  position: SharedValue<number>;
};
