import { StatusBar } from "expo-status-bar";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";
import UseEffectWithClassComponent from "./UseEffectWithClassComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";
import CustomHook from "./CustomHook";
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
import { useState } from "react";

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
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Basic Component </Text>
      <Headers title="친구" />
      <MyProfile />
      <FreiendList />
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

      <Text style={styles.text}> StateComponent </Text>
      {/* <StateWithClassComponent /> */}
      <StateWithFuctionalComponent />

      {/* <Text style={styles.text}> UseEffectWithClassComponent </Text>
      {isTrue ? <UseEffectWithClassComponent /> : null}
      <Button title="toggle" onPress={() => setIsTrue(!isTrue)} /> */}

      <Text style={styles.text}> UseEffectComponent </Text>
      <UseEffectWithFunctionalComponent />
      <Text style={styles.text}> CustomHook </Text>
      <CustomHook />
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
