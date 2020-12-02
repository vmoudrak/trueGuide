import React, {useState} from 'react'
import { View, Text ,Button,Icon } from 'react-native'
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import Share from '../Resuseables/Share';
import Map from "../Resuseables/Map"
import * as Sharing from 'expo-sharing';
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import MapA from "../Map/MapA";

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
      





    console.log(props.route.params)
    const { restaurant } = props.route.params;
    const [Longitude, setLongitude] = useState(restaurant.longitude);
    const [Latitude, setLatitude] = useState(restaurant.latitude);

    return (
        <View style={styles.container}>
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
                    <MapA longitudeOfRes={Longitude} latitudeOfRes={Latitude} />
                </View>
            </View>
            <View>
                <Map/>
            </View>
        </View>

    )
}



export default DetailsContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d2f9',
    },
});