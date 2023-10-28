import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform, View, Image } from "react-native";

import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";

const Item = styled(View)`
  padding: 15px;
  border-radius: 10px;
  max-width: 150px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  object-fit: cover;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  object-fit: cover;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, useWebView = false }) => {
    const Image = isAndroid && useWebView ? CompactWebview : CompactImage;

    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Spacer position="top" size="large">
                <Text center variant="caption" numberOfLines={3}>
                    {restaurant.name}
                </Text>

            </Spacer>
        </Item>
    );
};