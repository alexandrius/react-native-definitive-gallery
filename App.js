import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Gallery from "./Gallery/Gallery";

export default function App() {
   return (
      <View style={styles.container}>
         <Gallery
            style={{ flex: 1, backgroundColor: "black" }}
            images={[
               { source: { uri: "http://i.imgur.com/XP2BE7q.jpg" } },
               { source: { uri: "http://i.imgur.com/5nltiUd.jpg" } },
               { source: { uri: "http://i.imgur.com/6vOahbP.jpg" } },
               { source: { uri: "http://i.imgur.com/kj5VXtG.jpg" } },
            ]}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
});
