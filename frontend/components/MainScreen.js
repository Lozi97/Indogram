import React, { Component } from "react";
import { Platform } from "react-native";
import { Icon } from "native-base"; // 추가된 코드
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import HomeTab from './tabs/HomeTap';
import SearchTab from "./tabs/SearchTab";
import AddMediaTab from "./tabs/AddMediaTab";
import LikesTab from "./tabs/LikesTab";


const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab:{ screen: HomeTab },
    Search:{ screen: SearchTab },
    AddMedia:{ screen: AddMediaTab },
    Likes:{ screen: LikesTab },
  }, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        // ...Platform.select({
        //   ios:{
        //     backgroundColor:'white',
        //   }
        // })
        backgroundColor:'white',
      },
      indicatorStyle: {
        opacity: 0
      },
      iconStyle: { height: 30 },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      
      showIcon: true,
    }
  });
  
const AppTabContainet = createAppContainer(AppTabNavigator);



export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  // static navigationOptions = {
  //   headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
  //   title: 'Instagram',
  //   headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
  // }
  static navigationOptions = {
        title: 'Instagram',
        headerLeft:<Icon name='ios-camera' style={{ paddingLeft:10,padding:6 }}/>,
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
        headerRight: (
            
            <Icon name='ios-send' style={{ paddingRight:10,padding:6 }}/>
        )
    };
    
  render() {
    return (
        <AppTabContainet/>
    );
  }
}



// static navigationOptions = ({ navigation }) => {
//   return {
//     headerTitle: <LogoTitle />,
//     headerRight: (
//       <Button
//         onPress={navigation.getParam('increaseCount')}
//         title="+1"
//         color="#fff"
//       />
//     ),
//   };
// };

// componentDidMount() {
//   this.props.navigation.setParams({ increaseCount: this._increaseCount });
// }

// state = {
//   count: 0,
// };

// _increaseCount = () => {
//   this.setState({ count: this.state.count + 1 });
// };

// /* later in the render function we display the count */
// }