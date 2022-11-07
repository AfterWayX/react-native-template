import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View, Text } from 'react-native';
import TabNav from './src/components/TabNav';

export default function App() {
  return (
    <View className='h-full bg-black'>
      <SafeAreaView className="h-screen mt-auto text-white w-screen">
        <NavigationContainer>
        <TabNav />

        </NavigationContainer>
        {/* <Text className="text-white">Hello</Text> */}
      </SafeAreaView>
    </View>
  );
}

