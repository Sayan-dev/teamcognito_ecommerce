import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FlatButton from "../shared/button.js";
import HollowButton from "../shared/button.js";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>Phone number / Email Adress</Text>
      <TextInput style={styles.input} />
      <Text style={styles.textInput}>Password</Text>
      <TextInput style={styles.input} />
      <View>
        <TouchableOpacity>
          <FlatButton text="Log In"></FlatButton>
        </TouchableOpacity>
      </View>

      <Text style={styles.textInput}>
        Forgot your password?{" "}
        <Text style={{ fontWeight: "bold" }}>Get Help with signing in</Text>
      </Text>

      <View style={{marginTop:50}}>
        <TouchableOpacity>
          <HollowButton text="Sign Up"></HollowButton>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  textInput: {
    color: "grey",
    left: 0,
  },
});
