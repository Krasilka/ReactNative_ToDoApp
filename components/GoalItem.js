import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "grey" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 10,
    backgroundColor: "pink",
    marginVertical: 6,
  },
  goalItemText: {
    color: "black",
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "#cccccc",
    borderRadius: 10,
  },
});
