import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function MainPage() {
    return (
        <View className='bg-slate-700 rounded-xl flex flex-row mt-0'>
            <Text className='text-white flex w-fit h-fit mr-2.5'>Hello world</Text>
            <Text className='text-white flex w-fit h-fit'>Hello world</Text>

        </View>
    )
}