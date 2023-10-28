import React, { useRef } from "react";

import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from 'lottie-react-native';

import authAnim2 from '../../../../assets/authAnim2.json'
import { Text } from "../../../components/typography/text.component";

export const AccountScreen = ({ navigation }) => {
    const animation = useRef(null);
    // useEffect(() => {
    //     // You can control the ref programmatically, rather than using autoPlay
    //     // animation.current?.play();
    // }, []);

    return (
        <AccountBackground>
            <AccountCover />
            <Text variant="title">Meals To Go</Text>
            <LottieView
                autoPlay
                loop
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                }}
                source={authAnim2}
            />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};