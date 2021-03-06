import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ModalButton = (props) => {
  const {onPress, children} = props;
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    );
};

const styles = {
  buttonStyle: {
  //expand to fill as much content as it possibly can
    // flex: 1,
  //position itself using flexbox rules (stretch to fill the container)
    // alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 50
  },
  textStyle: {
    alignSelf: 'center',
    color: '#3a3c82',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { ModalButton };