import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen as Restaurants } from './src/features/restaurants/screens/restaurants.screen.js';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index.js';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from './src/components/typography/text.component.js';
import { SafeArea } from './src/utils/safe-are.components.js';
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.js';
import { LocationContextProvider } from './src/services/location/location.context.js';


const Map = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  )
}

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  )
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings"
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { position: 'absolute', height: 70, paddingBottom: 10 },
    tabBarBackground: () => (
      <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
    ),
  }
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer style={{ padding: 30 }}>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={Restaurants} options={{ headerShown: false }} />
                <Tab.Screen name="Map" component={Map} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}


