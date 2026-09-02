import { ArrowUpRight, Clock, Calendar, BadgeDollarSign } from "lucide-react";

const ProgramCard = ({
  title,
  description,
  organization,
  logo,
  duration,
  stipend,
  applicationDeadline,
  skills = [],
  link,
  featured = false,
}) => {
  return (
    <div
      className={`group relative flex h-full flex-col rounded-2xl border-2 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift dark:bg-stone-800/70 ${
        featured
          ? "border-brand/60 dark:border-brand/50"
          : "border-stone-200 dark:border-stone-700"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-5 rotate-2 rounded-md bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
          Featured
        </span>
      )}

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 -rotate-2 items-center justify-center overflow-hidden rounded-xl border-2 border-stone-100 bg-stone-50 dark:border-stone-700 dark:bg-stone-800">
          {logo ? (
            <img src={logo} alt={`${organization} logo`} className="h-full w-full object-cover" />
          ) : (
            <span className="font-display text-2xl font-bold text-stone-400">
              {organization?.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold leading-tight text-stone-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-brand">{organization}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
        {description}
      </p>

      {/* Metrics */}
      <div className="mt-5 grid grid-cols-3 gap-2 border-t-2 border-dashed border-stone-200 pt-4 dark:border-stone-700">
        <div className="text-center">
          <Clock size={15} className="mx-auto text-brand" />
          <div className="mt-1 text-xs font-bold text-stone-900 dark:text-white">{duration}</div>
          <div className="text-[11px] text-stone-500">Duration</div>
        </div>
        <div className="text-center">
          <BadgeDollarSign size={15} className="mx-auto text-forest-light" />
          <div className="mt-1 text-xs font-bold text-stone-900 dark:text-white">{stipend}</div>
          <div className="text-[11px] text-stone-500">Stipend</div>
        </div>
        <div className="text-center">
          <Calendar size={15} className="mx-auto text-wine-light" />
          <div className="mt-1 text-xs font-bold text-stone-900 dark:text-white">{applicationDeadline}</div>
          <div className="text-[11px] text-stone-500">Deadline</div>
        </div>
      </div>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {skills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-cream-deep px-2.5 py-0.5 text-[11px] font-semibold text-stone-700 dark:bg-stone-700 dark:text-stone-200"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Action */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-6 w-full group-hover:border-brand group-hover:bg-brand group-hover:text-white"
      >
        Explore program
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
};

export default ProgramCard;
