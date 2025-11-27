import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Song List</Text>
      <Text className="mt-2 text-base text-blue-600">Home Page</Text>
    </View>
  );
}
