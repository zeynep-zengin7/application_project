import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles'

const Welcome = () => {
        
    return (
            <>
                <StatusBar style="light"/>
                <InnerContainer>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/papatya.jpg')} />
                        <PageTitle welcome={true}>Welcome! Baby</PageTitle>
                        <SubTitle welcome={true}>Aslı Demirel</SubTitle>
                        <SubTitle welcome={true}>aslidemirel@gmail.com</SubTitle>
                        <WelcomeContainer>
                            <StyledFormArea>
                              <Avatar resizeMode="cover" source={require('./../assets/papatya.jpg')} />
                              <Line />
                                <StyledButton onPress={() => {}}>
                                    <ButtonText>Logollllkkkut</ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                    </WelcomeContainer>
                </InnerContainer>
            </>
    );
};

export default Welcome;