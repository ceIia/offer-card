export const Blur: React.FC = () => {
  return (
    <div className="gradient-blur">
      {Array.from({ length: 6 }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index} />
      ))}
    </div>
  );
};
