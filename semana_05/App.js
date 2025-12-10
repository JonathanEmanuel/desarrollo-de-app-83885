import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 34,
    padding: 16,
    backgroundColor: colors.background,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 20
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#fff',
    borderBottomColor: colors.border,
    borderBottomWidth: 1
  },
  listItem: {
    padding: 20,
    backgroundColor: '#111',
    marginVertical: 6,
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 1
  },
  listItemText: {
    color: '#fff'
  },
    photo:{
    width: 100,
    height: 100,
  },
});
 */