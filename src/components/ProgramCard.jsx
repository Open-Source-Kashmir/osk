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
  featured = false 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg shadow-gray-300/50 dark:shadow-black/10 border border-gray-200 dark:border-gray-700 relative overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300/60 dark:hover:shadow-black/20 hover:border-blue-400 dark:hover:border-blue-500 ${featured ? 'border-2 border-blue-500 dark:border-blue-600' : ''}`}>
      {featured && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white py-1 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/40 animate-pulse">
          Featured
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 hover:rotate-2">
          {logo ? (
            <img src={logo} alt={`${organization} logo`} className="w-full h-full object-cover" />
          ) : (
            <div className="text-2xl font-bold text-gray-500 dark:text-gray-400 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 w-full h-full flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-900 dark:hover:to-indigo-900">
              {organization?.charAt(0) || 'P'}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white m-0 mb-1 leading-tight">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 m-0 font-medium text-sm">{organization}</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{description}</p>

      <div className="flex flex-col gap-2 mb-6">
        {duration && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium text-gray-600 dark:text-gray-400 text-sm">Duration:</span>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">{duration}</span>
          </div>
        )}
        {stipend && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium text-gray-600 dark:text-gray-400 text-sm">Stipend:</span>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">{stipend}</span>
          </div>
        )}
        {applicationDeadline && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium text-gray-600 dark:text-gray-400 text-sm">Application Deadline:</span>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">{applicationDeadline}</span>
          </div>
        )}
      </div>

      {skills.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white m-0 mb-3">Required Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-800 dark:text-blue-300 py-1 px-4 rounded-2xl text-xs font-medium border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white py-4 px-8 rounded-2xl no-underline font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 relative overflow-hidden"
        >
          <span className="relative z-10">Learn More</span>
          <svg 
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;