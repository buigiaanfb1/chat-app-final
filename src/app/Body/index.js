import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from './styles';
import { db } from '../../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Message from '../../components/Message';

const Body = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const dummy = useRef();

  useEffect(() => {
    const q = query(
      collection(db, 'messages-nab'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];

      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });

      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    handleAutoScroll();
  }, [messages]);

  const handleRenderMessages = () => {
    return messages.map((message, index) => {
      return <Message key={index} message={message} name={message.user} />;
    });
  };

  const handleAutoScroll = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.root}>
      {messages.length > 0 && handleRenderMessages()}
      <span ref={dummy}></span>
    </div>
  );
};

export default Body;
