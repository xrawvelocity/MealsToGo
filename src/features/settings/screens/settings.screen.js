import React, { useCallback, useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvatarContainer, SettingsItem } from "../components/settings.styles";
import { SafeArea } from "../../../components/utility/safe-are.components";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";


export const SettingsScreen = ({ navigation }) => {
    const { onLogOut, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    };

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                    {!photo && (
                        <Avatar.Icon size={180} icon="human" backgroundColor="tomato" />
                    )}
                    {photo && (
                        <Avatar.Image
                            size={180}
                            source={{ uri: photo }}
                            backgroundColor="tomato"
                        />
                    )}
                </TouchableOpacity>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title={<Text variant="label">Favorites</Text>}
                    description={<Text variant="hint">View your favorites</Text>}
                    left={(props) => <List.Icon {...props} color="white" icon="heart" />}
                    onPress={() => navigation.navigate("Favorites", { screen: "Settings" })}
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