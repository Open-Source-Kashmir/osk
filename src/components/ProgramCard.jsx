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
    <div className={`bg-white rounded-3xl p-6 shadow-lg shadow-black/10 border border-gray-200 relative overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 hover:border-blue-400 ${featured ? 'border-2 border-blue-500' : ''}`}>
      {featured && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-1 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/40 animate-pulse">
          Featured
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105 hover:rotate-2">
          {logo ? (
            <img src={logo} alt={`${organization} logo`} className="w-full h-full object-cover" />
          ) : (
            <div className="text-2xl font-bold text-gray-500 bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-200 hover:to-indigo-200">
              {organization?.charAt(0) || 'P'}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 m-0 mb-1 leading-tight">{title}</h3>
          <p className="text-gray-500 m-0 font-medium text-sm">{organization}</p>
        </div>
      </div>

      <p className="text-gray-500 leading-relaxed mb-6">{description}</p>

      <div className="flex flex-col gap-2 mb-6">
        {duration && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-medium text-gray-500 text-sm">Duration:</span>
            <span className="font-semibold text-gray-900 text-sm">{duration}</span>
          </div>
        )}
        {stipend && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-medium text-gray-500 text-sm">Stipend:</span>
            <span className="font-semibold text-gray-900 text-sm">{stipend}</span>
          </div>
        )}
        {applicationDeadline && (
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-medium text-gray-500 text-sm">Application Deadline:</span>
            <span className="font-semibold text-gray-900 text-sm">{applicationDeadline}</span>
          </div>
        )}
      </div>

      {skills.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 m-0 mb-3">Required Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 text-blue-800 py-1 px-4 rounded-2xl text-xs font-medium border border-blue-200 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/30">
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
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-2xl no-underline font-semibold flex items-center gap-2 transition-all duration-500 shadow-lg shadow-blue-500/30 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden"
        >
          Learn More
          <svg 
            className="transition-transform duration-500" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;