import React, { Component } from 'react';
import { DeviceEventEmitter, View, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements';

import { newRecording, stopPlay, startPlay, timeProgress } from '../reducers/audio';

class PlaybackMenu extends Component {
  componentDidMount() {
    // @todo: replace 'test.aac' with dynamically created clip names (also in recorder)
    this.clip = new Sound('test.aac', Sound.DOCUMENT, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log('yay loaded the sound');
      }
    });
  }

  componentWillUnmount() {
    this.clip.release();
  }

  _togglePlayStop() {
    if (this.props.playing) {
      this.props.stopPlay();
      this.clip.pause();
    } else {
      this.props.startPlay();
      this.clip.play((success) => {
        success ? this.props.stopPlay() : console.log('playback failed due to audio decoding errors');
      });
    }
  }

  render() {
    const { smallButton } = styles;
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={'white'}
        style={smallButton}
        onPress={this._togglePlayStop.bind(this)}
      >
        <View>
        {
          this.props.playing ?
            <Icon
              name="ios-pause"
              type="ionicon"
              color="#CD0240"
            /> :
            <Icon
              name="ios-play"
              type="ionicon"
              color="#CD0240"
            />
        }
        </View>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 4,
    alignItems: 'center',
  },
  footer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  largeButton: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2
  },
  smallButton: {
    width: 70,
    height: 70,
    marginRight: 8

  },
});

const mapStateToProps = state => {
  const { playing, audioUrl } = state.audio;
  return { playing, audioUrl };
};

export default connect(mapStateToProps, {
  newRecording,
  stopPlay,
  startPlay,
  timeProgress
})(PlaybackMenu);
