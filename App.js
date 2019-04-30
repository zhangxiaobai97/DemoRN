import React from 'react';
import Index from './app/page/index';
import Home from './app/page/home';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import { Root } from 'native-base';
import UI from './app/component';


const RootRouter = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="index" component={Index} init={true} />
      <Tabs key="tabs" activeTintColor={'#000'} inactiveTintColor="grey">
        <Scene
          key="home"
          tabBarLabel="主页"
          hideNavBar
          component={Home}
          icon={({ tintColor }) => (
            <UI.MCIcon name="magnify" style={{ color: tintColor }} />
          )}
          onEnter={() => LabelModel.fetchItems()}
          />
          <Scene
          key="detail"
          tabBarLabel="详细"
          hideNavBar
          component={Home}
          icon={({ tintColor }) => (
            <UI.MCIcon name="magnify" style={{ color: tintColor }} />
          )}
          onEnter={() => LabelModel.fetchItems()}
          />
          <Scene
          key="my"
          tabBarLabel="我的"
          hideNavBar
          component={Home}
          icon={({ tintColor }) => (
            <UI.MCIcon name="magnify" style={{ color: tintColor }} />
          )}
          onEnter={() => LabelModel.fetchItems()}
          />
      </Tabs>
    </Stack>
  </Router>
);

function App() {
  return (
    <Root>
      <RootRouter />
    </Root>
  );
}

export default App;
