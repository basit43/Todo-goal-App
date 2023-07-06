import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";
function GoalInput (props) {
    const [GoalText, setGoalText] = useState('')
    function textInputHandler (Text) 
    {
        setGoalText(Text)
    }
    function addGoaltoList () 
    {
        props.onAddGoal(GoalText)
        setGoalText('')
    }
    return (
    <Modal visible= {props.visible} animationType="slide" >
    <View style = {styles.inputContainer}>
        <Image style = {styles.imageContainer} source={require('../assets/goal.png')} />
        <TextInput style = {styles.textInput}
        placeholder='Enter Your Goal?'
        onChangeText={textInputHandler}
        value={GoalText} ></TextInput>
        <View style = {styles.buttonContainer} >
        <View style = {styles.button} >
            <Button title='Add Goal' onPress={addGoaltoList} color={'#b180f0'}/>
        </View>
        <View style = {styles.button} >
            <Button title="Cancel"  onPress={props.onCancel} color={'#f31282'} />
        </View>
        </View>
    </View>
    </Modal>
      )
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 2,
        borderColor: '#cccccc',
        width: '80%',
        height: 40,
        padding: 8,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 8
      },
      buttonContainer: {
        marginTop: 10,
        flexDirection:'row'
      },
      imageContainer: {
        width: 100,
        height: 100,
        margin: 20
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      }
})