import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategotyIcon } from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategotyIcon />
            </Category>

            <ChannelButton selected channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
        </Container>
    )
}

export default ChannelList;