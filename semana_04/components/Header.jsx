import  { View, Text, StyleSheet } from 'react-native'


const Header = ( { title = 'APP Movie'}) => {
  return (
    <View>
        <Text> { title }</Text>
    </View>
  )
}



export default Header