import React, { useState } from 'react';
import { MainContainer, MainContent, MainItems, MainBtn, MainH1, MainP } from './MainElements';

function main() {
    return (
        <MainContainer>
            <MainContent>
                <MainItems>
                    <MainH1>Buona Soia</MainH1>
                    <MainP>Milanesas de soja</MainP>
                    <MainBtn>Las quiero!</MainBtn>
                </MainItems>
            </MainContent>
        </MainContainer>
    );
}

export default main;