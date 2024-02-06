import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Switch,
  ActivityIndicator,
} from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  // 1. didMount
  // 의존성 배열이 하나도 없기 때문에 어떠한 값이 바뀌어도 호출되지 않는 것,
  // 맨 처음에 한번만 호출됨
  useEffect(() => {
    console.log("didMount");
  }, []);

  // count 감지
  useEffect(() => {
    console.log("didUpdate - count", count);
  }, [count]);

  useEffect(() => {
    console.log("didUpdate - isOn", isOn);
  }, [isOn]);

  useEffect(() => {
    console.log("didUpdate - input", input);
  }, [input]);

  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]);

  return (
    <View style={{ alignItems: "center" }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text style={{ marginVertical: 10 }}>
        -------------------------------------------------
      </Text>
      <Switch value={isOn} onValueChange={setIsOn} />

      <Text style={{ marginVertical: 10 }}>
        -------------------------------------------------
      </Text>

      <Text>input: {input}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={{ borderBottomWidth: 1, borderColor: "grey" }}
      />

      <Text style={{ marginVertical: 10 }}>
        -------------------------------------------------
      </Text>
      <Button
        title="새로고침!"
        onPress={() => {
          setIsRefresh(true);
        }}
      />
      {isRefresh && <ActivityIndicator />}
    </View>
  );
};

export default Component;
