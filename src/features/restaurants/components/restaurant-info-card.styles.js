
import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const RestaurantCard = styled(Card)`
    background-color: ${({ theme }) => theme.colors.bg.secondary};
    margin: ${({ theme }) => theme.space[3]} 0;
    margin-bottom: ${({ theme }) => theme.space[3]};
`

export const RestaurantCardCover = styled(Card.Cover)`
padding: ${({ theme }) => theme.space[3]};
padding-bottom: 0;
background-color: ${({ theme }) => theme.colors.bg.secondary};
`

export const Info = styled(View)`
    padding: ${({ theme }) => theme.space[3]};
`

export const Address = styled(Text)`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.caption};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.copy};
`

export const Section = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${({ theme }) => theme.space[1]};
`

export const Rating = styled(View)`
    display: flex;
    flex-direction: row;
    padding-top: ${({ theme }) => theme.space[3]};
    padding-bottom: ${({ theme }) => theme.space[2]};
    `

export const SectionEnd = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const Icon = styled(Image)`
    width: 27px;
    height: 27px;
`