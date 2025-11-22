import React, { useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

interface AuthScreenProps {
  onAuthSuccess: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="transition-all duration-300">
      {showSignUp ? (
        <SignUpForm
          onSuccess={onAuthSuccess}
          onSwitchToSignIn={() => setShowSignUp(false)}
        />
      ) : (
        <SignInForm
          onSuccess={onAuthSuccess}
          onSwitchToSignUp={() => setShowSignUp(true)}
        />
      )}
    </div>
  );
};
