import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Milas</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink
                                href='https://www.instagram.com/buona.soia/'
                                target='_blank'
                                aria-label='Instagram'
                                rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}


export default Footer;