export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`m-auto w-full max-w-[2000px]  px-4 md:px-12 ${className}`}>
      {children}
    </div>
  );
};
