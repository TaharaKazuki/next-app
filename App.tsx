import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import PlannerScreen from './screens/PlannerScreen'

const App = () => {
  return (
    <View>
      <PlannerScreen />
      <StatusBar style="auto" />
    </View>
  )
}

export default App
