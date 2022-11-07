import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-voice/voice";

export default function SpeechRecognitionScreen() {
  const [results, setResults] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    function onSpeechResults(e: SpeechResultsEvent) {
        console.log(e.value)
      setResults(e.value ?? []);
    }
    function onSpeechError(e: SpeechErrorEvent) {
      console.error(e);
    }
    Voice!.onSpeechError = onSpeechError;
    Voice!.onSpeechResults = onSpeechResults;
    return function cleanup() {
      Voice!.destroy().then(Voice!.removeAllListeners);
    };
  }, []);

  async function toggleListening() {
    try {
      if (isListening) {
        setIsListening(false);
        await Voice?.stop();
      } else {
        setIsListening(true);
        setResults([]);
        await Voice?.start("en-US");
      }
    } catch(e){
        console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Press the button and start speaking.</Text>
      <Button
        title={isListening ? "Stop Recognizing" : "Start Recognizing"}
        onPress={toggleListening}
      />
      <Text>Results:</Text>
      {/* {results.map((result, index) => {
        return <Text key={`result-${index}`}>{result}</Text>;
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});