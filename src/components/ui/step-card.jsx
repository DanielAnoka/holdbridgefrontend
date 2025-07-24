
const StepCard = ({ image, title, description }) => {
  return (
    <div className="bg-accent p-6 rounded-lg border border-white/10 shadow-sm text-white flex flex-col gap-4 max-w-sm mx-auto">
      <img src={image} alt={title} className="rounded-md" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};

export default StepCard;
