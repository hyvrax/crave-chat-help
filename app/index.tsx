import MessageInput from '@/components/ChatInput'
import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const index = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.background,
      justifyContent: 'center',
    }}>
      <MessageInput />
    </View>
  )
}

export default index
