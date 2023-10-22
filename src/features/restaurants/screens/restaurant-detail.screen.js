import React, { useState } from 'react';
import { SafeArea } from '../../../components/utility/safe-are.components';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { Loading } from '../../../components/utility/loading.component';
import { List } from 'react-native-paper';
import styled from 'styled-components';
import { Text } from '../../../components/typography/text.component';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';

const StyledAccordion = styled(List.Accordion)`
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.text.primary};
`

StyledAccordion.defaultProps = {
    rippleColor: '#ff634720',
    theme: { colors: { primary: 'tomato', surfaceDisabled: '#c3cc', background: '#fff' } }
}

const Bar = styled(View)`
    background-color: ${({ theme }) => theme.colors.ui.secondary};
    width: 50px;
    height: 5px;
    border-radius: 10px;
    margin: -15px auto 0;
`

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const { restaurant, isLoading } = route.params;

    return (
        <SafeArea noTopMargin={true}>
            <Bar />
            {isLoading ?
                <Loading size={50} animating={true} color={"tomato"} />
                :
                (
                    <>
                        <RestaurantInfoCard restaurant={restaurant} />
                        <ScrollView
                            overScrollMode="never"
                            bounce={false}
                        >
                            <StyledAccordion
                                title={<Text>Breakfast</Text>}
                                left={props => <List.Icon {...props} icon="bread-slice" />}
                                expanded={breakfastExpanded}
                                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                            >
                                <List.Item title={<Text>Eggs Benedict</Text>} />
                                <List.Item title={<Text>Classic Breakfast</Text>} />
                            </StyledAccordion>
                            <StyledAccordion
                                title={<Text>Lunch</Text>}
                                left={props => <List.Icon {...props} icon="hamburger" />}
                                expanded={lunchExpanded}
                                onPress={() => setLunchExpanded(!lunchExpanded)}
                            >
                                <List.Item title={<Text>Burger w/ Fries</Text>} />
                                <List.Item title={<Text>Steak Sandwich</Text>} />
                                <List.Item title={<Text>Mushroom Soup</Text>} />
                            </StyledAccordion>
                            <StyledAccordion
                                title={<Text>Dinner</Text>}
                                left={props => <List.Icon {...props} icon="food" />}
                                expanded={dinnerExpanded}
                                onPress={() => setDinnerExpanded(!dinnerExpanded)}
                            >
                                <List.Item title={<Text>Spaghetti Bolognese</Text>} />
                                <List.Item title={<Text>Veal Cutlet with Chicken Mushroom Rotini</Text>} />
                                <List.Item title={<Text>Steak Fries</Text>} />
                            </StyledAccordion>
                            <StyledAccordion
                                title={<Text>Drinks</Text>}
                                left={props => <List.Icon {...props} icon="cup" />}
                                expanded={drinksExpanded}
                                onPress={() => setDrinksExpanded(!drinksExpanded)}
                            >
                                <List.Item title={<Text>Coffee</Text>} />
                                <List.Item title={<Text>Tea</Text>} />
                                <List.Item title={<Text>Modelo</Text>} />
                                <List.Item title={<Text>Coke</Text>} />
                                <List.Item title={<Text>Fanta</Text>} />
                            </StyledAccordion>
                        </ScrollView>
                    </>
                )
            }
        </SafeArea>
    )
}