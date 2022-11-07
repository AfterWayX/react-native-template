import { SafeAreaView, View, Text } from 'react-native';
import MainPage from "./pages/main/MainPage";

export default function App() {
  return (
    <View className='h-full bg-black'>
      <SafeAreaView className="h-screen mt-auto text-white w-screen">
        <MainPage />
        {/* <Text className="text-white">Hello</Text> */}
      </SafeAreaView>
    </View>
  );
}

