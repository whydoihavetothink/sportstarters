export const SectionGradient = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none -z-10"
      style={{
        background: `linear-gradient(30deg,rgba(242, 138, 24, 0.75) 0%, rgba(255, 255, 255, 1) 50%, rgba(18, 119, 212, 0.75) 100%)`
      }}
    />
  );
};