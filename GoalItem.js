import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem (props) {
    return (
        <View style = {styles.goalTextContainer}>
        <Pressable 
        onPress={props.onDeleteItem.bind(this, props.id)} 
        style = {({pressed}) => pressed && styles.pressedItem }>
        <Text
        style = {styles.goalTextItem}>{props.text}
        </Text>
        </Pressable>
        </View>
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    goalTextContainer: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5a0ecc',
      },
      goalTextItem: {
        color: 'white',
        padding: 8,
      },
      pressedItem: {
        opacity: 0.5
      }
})