import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Address, Icon, Info, Rating, RestaurantCard, RestaurantCardCover, Section, SectionEnd } from "./restaurant-info-card.styles";
import { Favorite } from "../../../components/favorites/favorite.component";
import { View } from "react-native";

export const RestaurantInfoCard = ({ restaurant = {
    name: "Some Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
    placeId
} }) => {
    const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)))

    return (
        <RestaurantCard elevation={5}>
            <View>
                <Favorite restaurant={restaurant} />
                <RestaurantCardCover key={restaurant.name} source={{ uri: restaurant.photos[0] }} />
            </View>
            <Info>
                <Text variant="label">{restaurant.name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((each, index) => {
                            return (
                                <SvgXml key={`star-${restaurant.placeId}-${index}`} xml={star} width={20} height={20} />
                            )
                        })
                        }
                    </Rating>
                    <SectionEnd>
                        {restaurant.isClosedTemporarily && (
                            <Text variant="error">Closed Temporarily</Text>
                        )}
                        {restaurant.isOpenNow &&
                            (<Spacer position="left" size="large">
                                <SvgXml xml={open} width={27} height={27} />
                            </Spacer>)
                        }
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: restaurant.icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{restaurant.address}</Address>
            </Info>
        </RestaurantCard>
    )
}
