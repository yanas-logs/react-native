import { Box, Text, Button } from "@gluestack-ui/themed";

export default function HomeScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$white">
      <Text fontSize="$2xl" fontWeight="$bold">
        Song List
      </Text>

      <Text mt="$2" fontSize="$lg" color="$blue600">
        Home Page
      </Text>

      <Button action="primary" mt="$4">
        <Text>Click me</Text>
      </Button>
    </Box>
  );
}
