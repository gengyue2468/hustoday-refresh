const Heading = ({ children, className, ...props }) => {
  return (
    <h1 className={`font-semibold text-2xl ${className}`} {...props}>
      {children}
    </h1>
  );
};

const SubHeading = ({ children, className, ...props }) => {
  return (
    <h1 className={`font-semibold text-xl opacity-50 ${className}`} {...props}>
      {children}
    </h1>
  );
};

const NormalHeading = ({ children, className, ...props }) => {
  return (
    <h1 className={`font-semibold text-base ${className}`} {...props}>
      {children}
    </h1>
  );
};

export { Heading, SubHeading, NormalHeading };
