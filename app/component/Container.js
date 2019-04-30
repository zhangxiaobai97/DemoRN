import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  View
} from 'native-base';

export default function MyContainer({
  title,
  leftBtn = null,
  rightBtn = null,
  style = {},
  children
}) {
  return (
    <Container>
      <Header
        style={{ backgroundColor: '#fafbfc' }}
        androidStatusBarColor="#fafbfc">
        <Left>
          {leftBtn}
        </Left>
        <Body>
          <Title style={{ color: '#000' }}>{title}</Title>
        </Body>
        <Right>{rightBtn}</Right>
      </Header>
      <View style={[{ flex: 1 }, style]}>{children}</View>
    </Container>
  );
}
