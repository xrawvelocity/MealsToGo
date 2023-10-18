import { SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    background-color: ${({ theme }) => theme.colors.bg.primary};
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[5]};
`;