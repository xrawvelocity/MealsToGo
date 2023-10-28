import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvatarContainer, SettingsItem } from "../components/settings.styles";
import { SafeArea } from "../../../components/utility/safe-are.components";


export const SettingsScreen = ({ navigation }) => {
    const { onLogOut, user } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={50} icon="human" backgroundColor="tomato" />
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title={<Text variant="label">Favorites</Text>}
                    description={<Text variant="hint">View your favorites</Text>}
                    left={(props) => <List.Icon {...props} color="white" icon="heart" />}
                    onPress={() => navigation.navigate("Favorites")}
                />
                <SettingsItem
                    title={<Text variant="label">Log Out</Text>}
                    left={(props) => <List.Icon {...props} color="white" icon="logout" />}
                    onPress={onLogOut}
                />
            </List.Section>
        </SafeArea>
    );
};