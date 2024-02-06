import { StatusBar } from "expo-status-bar";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";
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
  return (
    <View>
      <Profile
        name="아현"
        url="https://cdn.metavv.com/prod/uploads/thumbnail/images/10043263/167100535142741_md.png"
        profileSize={40}
      />
    </View>
  );
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const FreiendList = () => {
  return (
    <View>
      <Profile
        name="친구1"
        url="https://down.humoruniv.com//hwiparambbs/data/editor/pdswait/e_s9fec1f002_c9cacfa39109b8232147d5862de7e3efb62e1f59.jpg"
        profileSize={30}
      />
      <Profile
        name="친구2"
        url="https://down.humoruniv.com//hwiparambbs/data/editor/pdswait/e_s9fec1f002_c9cacfa39109b8232147d5862de7e3efb62e1f59.jpg"
        profileSize={30}
      />
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: props.url,
        }}
        style={{ width: props.profileSize, height: props.profileSize }}
      />
      <Text>{props.name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StateWithClassComponent />
      <StateWithFuctionalComponent />
      <Headers title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FreiendList />
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
