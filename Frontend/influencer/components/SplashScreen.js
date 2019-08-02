import React, { Component } from 'react';
import {Text, View} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
          <View>
            <Text>
              Loading
              <AnimatedEllipsis numberOfDots={3}
                  minOpacity={0.4}
                  animationDelay={200}
                  style={{
                    color: '#94939b',
                    fontSize: 100,
                    letterSpacing: -15,
                  }}
                  />
            </Text>
          </View>
        );
      };
}