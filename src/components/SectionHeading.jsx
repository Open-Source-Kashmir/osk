const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && <span className="tag">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
