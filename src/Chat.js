import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Lorem Ipsum Loro Tem',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://s.yimg.com/ny/api/res/1.2/fFVXWfn5kTBfcSdo1T4ZRw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2g9NjAwO2lsPXBsYW5l/http://media.zenfs.com/en_us/News/ap_webfeeds/4164ac4ddba6d20a4e0f6a706700d488.jpg',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}