import React, { useState } from 'react';
import axios from 'axios';
import { Container, Desc, FormField, Input, Submit, TextField, Title, Wrapper } from './StyledComponents';

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [question, setQuestion] = useState('');

  const handleSend = async () => {
    const botToken = '7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0';
    const chatId = '8158030030';

    const text = `
🧾 New question from portfolio:
👤 Name: ${name}
📞 Phone: ${number}
❓ Question: ${question}
`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      if(name && number && question){
        await axios.post(url, {
          chat_id: chatId,
          text: text,
        });
        alert('Message sent to Telegram!');
        setName('');
        setNumber('');
        setQuestion('');

      }else{
        alert('Yields is not filled')
      }

    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Ask question</Title>
        <Desc>If you have any question, write and send to me</Desc>
        <FormField>
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Your phone"
            value={number}
            onChange={(e) => {
            const input = e.target.value.replace(/\D/g, ''); 
            if (input.length <= 9) {
               setNumber(input);
            }}}
           />
          <TextField
            rows={10}
            placeholder="Your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Submit onClick={handleSend}>Submit</Submit>
        </FormField>
      </Wrapper>
    </Container>
  );
};

export default Contact;
