"use client"
import React, { useState, useEffect } from 'react';
import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton';
import styled from 'styled-components';
import { IconBrandWhatsapp, IconX } from '@tabler/icons-react';

interface WhatsAppWidgetProps {
  name: string;
  photo: string;
  status?: string;
  nameTextColor?: string;
  statusTextColor?: string;
  containerHeaderBackground?: string;
  containerBodyBackground?: string;
  containerBottomBackground?: string;
  messageBackground?: string;
  messageTextColor?: string;
  defaultButtonBackground?: string;
  hoveredButtonBackground?: string;
  buttonTextColor?: string;
  widgetRounding?: string;
  onWhatsAppClick: () => void;
  displayedMessage: string;
  selfPopUpsIn: number;
  typingDotsColor?: string;
  nameTransformY?: string;
  statusTransformY?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  name,
  photo,
  status = "online",
  nameTextColor = "#ffffff",
  statusTextColor = "#eeeeee",
  containerHeaderBackground = "#075e54",
  containerBodyBackground = "#e5ddd5",
  containerBottomBackground = "#f0f0f0",
  messageBackground = "#ffffff",
  messageTextColor = "#000000",
  defaultButtonBackground = "#25d366",
  hoveredButtonBackground = "#128c7e",
  buttonTextColor = "#ffffff",
  widgetRounding = "12px",
  onWhatsAppClick,
  displayedMessage,
  selfPopUpsIn,
  typingDotsColor = "#9e9ea1",
  nameTransformY = "3px",
  statusTransformY = "0px",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  useEffect(() => {
    const autoOpenTimeout = setTimeout(() => {
      if (!hasBeenOpened) {
        setIsOpen(true);
        setHasBeenOpened(true);
      }
    }, selfPopUpsIn);

    return () => clearTimeout(autoOpenTimeout);
  }, [hasBeenOpened, selfPopUpsIn]);

  useEffect(() => {
    if (isOpen) {
      if (isFirstOpen) {
        setIsTyping(true);
        const typingTimeout = setTimeout(() => {
          setIsTyping(false);
          setMessages([displayedMessage]);
          setIsFirstOpen(false);
        }, 2000);
        return () => clearTimeout(typingTimeout);
      } else {
        setMessages([displayedMessage]);
      }
    }
  }, [isOpen, displayedMessage, isFirstOpen]);  

  const toggleChat = () => {
    if (isOpen) {
      setMessages([]);
    }
    setIsOpen(!isOpen);
    setHasBeenOpened(true);
  };  

  return (
    <>
      <ChatIcon onClick={toggleChat} isVisible={!isOpen}>
         <IconBrandWhatsapp size={35} color="#ffffff" stroke={1.5} />
      </ChatIcon>
      <ChatContainer isOpen={isOpen}>
        <ChatHeader background={containerHeaderBackground} borderRadius={widgetRounding}>
          <AvatarContainer>
            <Avatar src={photo} alt="Avatar" />
            <OnlineDot />
          </AvatarContainer>
          <ChatHeaderInfo>
            <Name color={nameTextColor} transformY={nameTransformY}>{name}</Name>
            <Status color={statusTextColor} transformY={statusTransformY}>{status}</Status>
          </ChatHeaderInfo>
          <CloseButton onClick={toggleChat} color={nameTextColor}>
            <IconX size={24} color={nameTextColor} stroke={2.5} />
          </CloseButton>
        </ChatHeader>
        <ChatContent background={containerBodyBackground}>
          {isTyping && (
            <TypingIndicator background={containerBodyBackground}>
              <TypingDot color={typingDotsColor} />
              <TypingDot color={typingDotsColor} />
              <TypingDot color={typingDotsColor} />
            </TypingIndicator>
          )}
          {messages.map((message, index) => (
            <Message key={index} background={messageBackground} color={messageTextColor}>
              {message}
            </Message>
          ))}
        </ChatContent>
        <MessageInput background={containerBottomBackground} borderRadius={widgetRounding}>
          <ChronicleButton
            text="Chat in WhatsApp"
            onClick={onWhatsAppClick}
            width="100%"
            customBackground={defaultButtonBackground}
            hoverColor={hoveredButtonBackground}
            customForeground={buttonTextColor}
            borderRadius={widgetRounding}
          />
        </MessageInput>
      </ChatContainer>
    </>
  );
};

const GlobalStyle = styled.div`
  font-family: "Segoe UI", sans-serif;
`;

const ChatIcon = styled(GlobalStyle)<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10001;
  animation: wave 2s infinite;

  @keyframes wave {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }
`;

const ChatContainer = styled(GlobalStyle)<{ isOpen: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 10002;
`;

const ChatHeader = styled(GlobalStyle)<{ background: string; borderRadius: string }>`
  background-color: ${props => props.background};
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: ${props => `${props.borderRadius} ${props.borderRadius} 0 0`};
  height: 62px;
`;

const AvatarContainer = styled(GlobalStyle)`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const OnlineDot = styled(GlobalStyle)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: #25d366;
  border-radius: 50%;
  border: 2px solid #075e54;
`;

const ChatHeaderInfo = styled(GlobalStyle)`
  flex-grow: 1;
`;

const Name = styled(GlobalStyle)<{ color: string; transformY: string }>`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0px;
  color: ${props => props.color};
  transform: translateY(${props => props.transformY});
`;

const Status = styled(GlobalStyle)<{ color: string; transformY: string }>`
  font-size: 14px;
  color: ${props => props.color};
  transform: translateY(${props => props.transformY});
`;

const CloseButton = styled(GlobalStyle)<{ color: string }>`
  background: none;
  border: none;
  color: ${props => props.color};
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    transition: opacity 0.3s ease;
    opacity: 0.86;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const ChatContent = styled(GlobalStyle)<{ background: string }>`
  height: 300px;
  padding: 20px;
  overflow-y: auto;
  background-color: ${props => props.background};
`;

const Message = styled(GlobalStyle)<{ background: string; color: string }>`
  max-width: 80%;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-radius: 7.5px;
  position: relative;
  word-wrap: break-word;
  background-color: ${props => props.background};
  color: ${props => props.color};
  align-self: flex-start;
`;

const MessageInput = styled(GlobalStyle)<{ background: string; borderRadius: string }>`
  height: 69px;
  display: flex;
  padding: 10px;
  background-color: ${props => props.background};
  border-radius: ${props => `0 0 ${props.borderRadius} ${props.borderRadius}`};
`;

const TypingIndicator = styled(GlobalStyle)<{ background: string }>`
  background-color: ${props => props.background};
  padding: 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
`;

const TypingDot = styled.span<{ color: string }>`
  height: 10px;
  width: 10px;
  float: left;
  margin: 0 1px;
  background-color: ${props => props.color};
  display: block;
  border-radius: 50%;
  opacity: 0.4;

  &:nth-of-type(1) {
    animation: 1s blink infinite 0.3333s;
  }

  &:nth-of-type(2) {
    animation: 1s blink infinite 0.6666s;
  }

  &:nth-of-type(3) {
    animation: 1s blink infinite 0.9999s;
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }
  }
`;

export default WhatsAppWidget;