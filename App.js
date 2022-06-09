import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_To_Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "orange" },
        }}
      >
        <Stack.Screen
          name="App_To_Home"
          options={{
            title: "Movie Time",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Home_To_Details"
          options={({ route }) => ({
            title: route.params.movie.title,
          })}
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Details_To_Details"
          options={({ route }) => ({
            title: route.params.movie.title,
          })}
          component={DetailsScreen}
        />
        <Stack.Screen name="Detail_To_BigImageView" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
