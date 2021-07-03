import React from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                <ChannelMessage
                    author="Guilherme Rodz"
                    date="21/06/2021"
                    content="Isso é uma mensagem"
                />
                
                <ChannelMessage
                    author="Diego Fernandes"
                    date="21/06/2021"
                    content={
                        <>
                            <Mention>Guilherme Rodz</Mention>, me carrega no 
                            LoL e CS de novo, por favor?
                        </>
                    }
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;