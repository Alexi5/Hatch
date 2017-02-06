import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { CardSection } from './common';
import { selectFriend } from '../reducers/friends';

class SingleFriend extends Component {
  onPress() {
    this.props.selectFriend(this.props.friend.fbId);
    Actions.eggManager();
  }

  render() {
    const { name, picture } = this.props.friend;
    return (
      <CardSection>
        <TouchableHighlight onPress={this.onPress.bind(this)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: picture.data.url }} />
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        </TouchableHighlight>
      </CardSection>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    paddingLeft: 15,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 10,
  }
};

SingleFriend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.integer,
    name: PropTypes.string,
    picture: PropTypes.object,
  }),
  selectFriend: PropTypes.func,
};

export default connect(() => ({}), { selectFriend })(SingleFriend);
