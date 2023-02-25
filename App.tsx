import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a picture from firebase storage</Text>
      <Image 
        source={"https://firebasestorage.googleapis.com/v0/b/bucket10-7425e.appspot.com/o/lists%2F1LgA5qVFsJTFxdFOECCc?alt=media&token=518f6d64-c887-4f44-a476-74f91360a6ad"} 
        style={styles.card}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    height: 200,
    borderColor: "#E8E8E8",
  }
});
