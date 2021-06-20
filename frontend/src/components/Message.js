import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert && (
        <Alert
          variant={variant}
          dismissible
          onClose={() => setShowAlert(false)}
        >
          {children}
        </Alert>
      )}
    </>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
