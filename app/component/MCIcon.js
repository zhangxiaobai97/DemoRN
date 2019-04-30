import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MCIcon({ name, size = 24, style, color = '#000' }) {
  return <Icon name={name} size={size} style={style} color={color} />;
}
