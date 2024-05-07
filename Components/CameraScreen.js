import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [isCameraReady, setCameraReady] = useState(false);

  const takePicture = async () => {
    if (cameraRef.current && isCameraReady) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      // Do something with the captured image data
      console.log('Image captured:', data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        onCameraReady={() => setCameraReady(true)}
        captureAudio={false}
      />
      <View style={styles.captureContainer}>
        <Button
          title="Take Picture"
          onPress={takePicture}
          disabled={!isCameraReady}
        />
        <Button
          title="Back to SRP"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CameraScreen;
