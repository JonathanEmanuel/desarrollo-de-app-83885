import  { View, Text, StyleSheet } from 'react-native'
import { colors } from '../global/colors'

const Header = ( { title }) => {
  return (
    <View>
        <Text style={styles.title}> { title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
    textAlign: 'center'
  },
})

export default Header