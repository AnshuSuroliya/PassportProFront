import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [redirect, setRedirect] = useState(false);
    const navigate=useNavigate();
  const handleRedirect = () => {
    // Redirect to the error page
    setRedirect(true);
  };

  const handleError = (error, errorInfo) => {
    console.error(error, errorInfo);
    // You can log the error or send it to an error reporting service

    // Set the state to trigger a redirect to the error page
    setHasError(true);
  };

  if (redirect) {
    // Redirect to the error page
    return navigate("/error");
  }

  if (hasError) {
    // You can render a custom error message here if needed
    return navigate("/error");
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onError: handleError, onRedirect: handleRedirect })
      )}
    </React.Fragment>
  );
}

export default ErrorBoundary;
