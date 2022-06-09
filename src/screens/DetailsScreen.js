import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = (props) => {
  const { navigation, route } = props;
  console.log(route);
  const { movie } = route.params;
  return (
    <View style={styles.mainView}>
      <Text style={{ fontSize: 20 }}>
        {movie.title} {movie.release}
      </Text>
      <Text style={{ fontSize: 100 }}>{movie.screenNumber}</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("Detail_To_BigImageView");
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          movie.screenNumber = movie.screenNumber + 1;
          console.log(movie);
          navigation.push("Details_To_Details", {
            movie: movie,
          });
        }}
      />
      <Button
        title="Go Back Home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
