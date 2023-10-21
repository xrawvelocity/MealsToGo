import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen as Restaurants } from './src/features/restaurants/screens/restaurants.screen.js';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index.js';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.js';
import { LocationContextProvider } from './src/services/location/location.context.js';
import { Navigator } from './src/infrastructure/navigation/index.js';

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
            <Navigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}


