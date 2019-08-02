import { createStackNavigator, createAppContainer } from "react-navigation";
/////////////////////////////////
//Company imports
/////////////////////////////////
import CompanyProfile from "./company/components/profile/Profile";
import CompanyProfileThirdComponent from "./company/components/profile/ProfileThirdForm";
import CompanyMainScreen from "./company/components/MainScreen";
import CompanysecondComponent from "./company/components/profile/ProfileSecondComponent";
import CompanyForm from "./company/components/Form";
import CompanyCard from "./company/components/Card";
/////////////////////////////////
//influencer imports
/////////////////////////////////
import InfluencerProfile from "./influencer/components/profile/Profile";
import InfluencerProfileThirdComponent from "./influencer/components/profile/ProfileThirdForm";
import InfluencerMainScreen from "./influencer/components/MainScreen";
import InfluencersecondComponent from "./influencer/components/profile/ProfileSecondComponent";
import InfluencerForm from "./influencer/components/Form";
import InfluencerCard from "./influencer/components/Card";
const RootStack = createStackNavigator({
  /////////////////////////////////
  //conpany scrrens
  /////////////////////////////////
  CompanyMainScreen: {
    screen: CompanyMainScreen
  },
  CompanyProfile: {
    screen: CompanyProfile
  },
  CompanySecond: {
    screen: CompanysecondComponent
  },
  CompanyThird: {
    screen: CompanyProfileThirdComponent
  },
  CompanyForm: {
    screen: CompanyForm
  },
  CompanyCard: {
    screen: CompanyCard
  },
  /////////////////////////////////
  //influencer scrrens
  /////////////////////////////////
  InfluencerMainScreen: {
    screen: InfluencerMainScreen
  },
  InfluencerProfile: {
    screen: InfluencerProfile
  },
  InfluencerSecond: {
    screen: InfluencersecondComponent
  },
  InfluencerThird: {
    screen: InfluencerProfileThirdComponent
  },
  InfluencerForm: {
    screen: InfluencerForm
  },
  InfluencerCard: {
    screen: InfluencerCard
  }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
