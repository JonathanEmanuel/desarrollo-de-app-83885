// navigation/StackNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import MovieDetail from "../screens/MovieDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <Header title="Movie App" />,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="MoviesScreen" component={Movies} />
      <Stack.Screen name="Detail" component={MovieDetail} />
    </Stack.Navigator>
  );
}
