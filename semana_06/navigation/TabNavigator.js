// navigation/TabNavigator.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import Movies from "../screens/Movies";
import Favorites from "../screens/Favorites";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = route.name === "Home" ? "home" : "film";
          return <Ionicons name={iconName} size={ focused ? 28 : 22 } color={ color } />;
        },
        tabBarActiveTintColor: "#e50202",
        tabBarInactiveTintColor: "#888",
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "star" : "star-outline"}
              size={26}
              color={focused ? "#e50202" : "#888"}
            />
          ),
          tabBarLabel: "Favoritos",
        }}
/>
    </Tab.Navigator>
  );
}
