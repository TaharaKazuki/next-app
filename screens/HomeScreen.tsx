import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    console.info('Rending Home Screen')
  }, [])

  return (
    <View>
      <Text>I am Home screen</Text>
      <Button title="Go to Planner" onPress={() => navigation.navigate('Planner')} />
    </View>
  )
}

export default HomeScreen
