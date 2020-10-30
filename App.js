import {StatusBar} from 'expo-status-bar';
import {Video} from 'expo-av';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  const _onLoad = status => {
    console.log(`ON LOAD : ${JSON.stringify(status)}`);
  };

  const _onError = error => {
    console.log(`ON ERROR : ${error}`);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'http://192.168.254.33:3001/api/upload/stream/materials/1181-file_example_MP4_480_1_5MG.mp4/7bit/video/mp4',
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGN5YmVyc2Nob29sLmNvbSIsInJvbGVpZCI6NSwidXNlcmlkIjoyLCJhY3RpdmVzdWJzY3JpcHRpb25zIjoxLCJpYXQiOjE2MDM2NTEyNTMsImV4cCI6MTYwNjI0MzI1M30.mkPbT27tcQNeTirXKv2CYtE8HdnYuW-u891FbNgpLB0'
          }
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        onLoad={_onLoad}
        onError={_onError}
        style={{width: 300, height: 300}}
      />
      <StatusBar style="auto" />
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
});
