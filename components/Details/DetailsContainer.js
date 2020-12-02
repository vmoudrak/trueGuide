import React from 'react'
import { View, Text ,Button,Icon } from 'react-native'
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import Share from '../Resuseables/Share';
import Map from "../Resuseables/Map"
import * as Sharing from 'expo-sharing';

const DetailsContainer = (props) => {
    console.log(props.route.params)
    const {restaurant} = props.route.params;
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: 'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
      return (
        <View style={{ marginTop: 50 }}>
          <Button onPress={onShare} title="Share" />
        </View>
      );
    }
    return (
        <View>
            <View>
                <RestaurantInfo restaurant={restaurant}></RestaurantInfo>
            </View>
            <View>
                <View>
                    <Text>
                        {restaurant.details}


    <Button icon={<Icon name="arrow-right" size={15} color="white"/>} title={"SHARE"}  onPress={onShare}   />
                    </Text>
                    
                </View>
                <View>

                <Share></Share>
                </View>
            </View>
            <View>
                <Map></Map>
            </View>
        </View>
    )
}

export default DetailsContainer
