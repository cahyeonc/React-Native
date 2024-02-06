import { StatusBar } from "expo-status-bar";
import {
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
} from "react-native";

const Headers = (props) => {
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return <Text>MyProfile</Text>;
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const Profile = (props) => {
  return <Text>{props.name}</Text>;
};
const FreiendList = () => {
  return (
    <View>
      <Profile name="친구1" />
      <Profile name="친구2" />
      <Profile name="친구3" />
      <Profile name="친구4" />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Headers title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FreiendList />

      <Text style={styles.text}>
        Open up App.js to start working on your app!!!!
      </Text>
      <Image source={require("./cat1.jpeg")} style={styles.local_image} />
      <Image
        source={{
          uri: "https://cdn.metavv.com/prod/uploads/thumbnail/images/10043263/167100535142741_md.png",
        }}
        style={styles.url_image}
      />
      <TextInput placeholder="고양이 이름 입력" />

      <Button
        title="ClickMe"
        onPress={() => {
          console.log("clicked!"); // 터미널에서 확인 가능
        }}
      />

      <Switch value={true} />
      <Switch value={false} />

      <ScrollView>
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
        <Image source={require("./cat1.jpeg")} style={styles.local_image} />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  local_image: { width: 100, height: 100 },
  url_image: { width: 200, height: 200 },
});
