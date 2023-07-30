import React, { useState, useEffect } from 'react';
import './feedbackMessage.css';

interface FeedbackMessageProps {
  message: string;
  isError?:boolean;
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ message,isError }) => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return show ? <div className={ isError ?  'feedback-error-message ' : "feedback-message"} >{message}</div> : null;
};

export default FeedbackMessage;
