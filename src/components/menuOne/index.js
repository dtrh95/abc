import React, {Component} from 'react';
import { View } from 'react-native';
export default class MenuOne extends Component {
    render() {
        const {width,height,backgroundColor} = this.props;
        return (
            <View style = {{
                width,
                height,
                backgroundColor}}
            />
           
        );
    }
};

