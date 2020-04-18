
/*import React, {Component} from 'react';
import { View, Text } from 'react-native';
import  MenuOne  from './src/components';
  export class SpringRolls extends Component {
  render(props) {
    return (
      <View style = {{
        height : 50,
        width : 100,
        flexDirection : 'row',
      }}
      >
        <Text>Day la {this.props.threeCourseMeal}. Do la Cha Gio</Text>  
        <Text>Cong thuc gom co :</Text>
      </View>
    );
  }

}
export default class App extends Component {
  render = () => {
    return (
        <MenuOne 
          width  = {100}
          height =  {50}
          backgroundColor = {'red'}
        >
          <SpringRolls threeCourseMeal = "mon Starter"/>
        </MenuOne>
    );
  }
};*/
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ga nuong muoi ot</Text>
      <Button
        title="Xem cach che bien"
        onPress={() => navigation.navigate('Details1')}
      />
      <Text>Thit heo quay</Text>
        <Button
          title="Xem cach che bien"
          onPress={() => navigation.navigate('Details2')}
      />
    </View>
  );
}


function DetailsScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Thit ga + muoi ot</Text>
    </View>
  );
}

function DetailsScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Thit heo</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details1" component={DetailsScreen1} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
