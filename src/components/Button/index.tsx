import * as React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className, ...rest } = props;
  return (
      <button className={className} {...rest}>
        {text}
      </button>
  );
};

export default Button;