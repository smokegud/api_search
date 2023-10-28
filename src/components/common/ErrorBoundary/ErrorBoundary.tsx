import React from 'react';
import './ErrorBoundary.scss';

const ErrorBoundary = ({ message }: { message: string }) => {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
    </div>
  );
};

export default ErrorBoundary;
