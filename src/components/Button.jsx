import '../styles/button.css';

// eslint-disable-next-line react/prop-types
const Button = ({children, variant, className, ...props}) => {
  const baseClass = 'btn';

  const variantClasses = {
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    danger: 'btn--danger',
  };

  const buttonClass = `${baseClass} ${variantClasses[variant] || ''} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
