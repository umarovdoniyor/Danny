import React from 'react'
import { View } from 'react-native'
import { Video } from 'expo'

export default props => (
    <View style={{flex: 1}}>
        <Video
            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: '100%', height: '100%' }}
        />
    </View>
)