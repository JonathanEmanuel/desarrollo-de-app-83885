import  { View, Text, StyleSheet } from 'react-native'
import { colors } from '../global/colors'

const Header = ( { title }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> { title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.border,
    borderBottomWidth: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
  },
});
export default Header