import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [GoalsList, setGoalList] = useState([])
  
  function startAddGoalHandler () {
    setModalIsVisible(true)
  }
  function endAddGoalHandler () {
    setModalIsVisible(false)
  }
  function addGoaltoList (GoalText) 
  {
    setGoalList((currentGoal) =>
    [...currentGoal, {text: GoalText, id: Math.random().toString()}, ])
  }
  function deleteGoalItem (id) {
    setGoalList(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== id)
    })
    endAddGoalHandler();
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' 
      color={'#a065ec'} 
      onPress={startAddGoalHandler} />
      <GoalInput 
      visible = {modalIsVisible} 
      onAddGoal = {addGoaltoList} 
      onCancel = {endAddGoalHandler} />
      <FlatList data={GoalsList} renderItem={itemData => {
        return <GoalItem
        text = {itemData.item.text}
        onDeleteItem = {deleteGoalItem}
        id = {itemData.item.id} />
      }} alwaysBounceVertical = {false}
      keyExtractor={(item, index) => {
        return item.id;
      }}/>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
});
