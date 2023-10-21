import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const StyledSafeArea = styled(SafeAreaView)`
flex: 1;
flex-direction: column;
${({ tabBarHeight }) => tabBarHeight && `margin-bottom: ${tabBarHeight}px`};
background-color: ${({ theme }) => theme.colors.bg.primary};
padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[0]};
${({ noTopMargin }) => !noTopMargin && StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const SafeArea = ({ noTopMargin = false, children }) => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <StyledSafeArea noTopMargin={noTopMargin} tabBarHeight={tabBarHeight}>{children}</StyledSafeArea>
    )

}