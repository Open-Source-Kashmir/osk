import { useState } from 'react';
import { PlayCircle, CheckCircle, Clock, Target, Award, Lock, ChevronDown, ChevronRight } from 'lucide-react';

const ModuleCard = ({ 
  module, 
  index, 
  isCompleted, 
  isLocked, 
  onStartModule, 
  onCompleteModule 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getModuleStatus = () => {
    if (isCompleted) return { color: 'green', icon: CheckCircle, text: 'Completed' };
    if (isLocked) return { color: 'gray', icon: Lock, text: 'Locked' };
    return { color: 'blue', icon: PlayCircle, text: 'Available' };
  };

  const status = getModuleStatus();

  return (
    <div className={`bg-white rounded-xl border-2 transition-all duration-300 ${
      isCompleted 
        ? 'border-green-200 bg-green-50' 
        : isLocked 
        ? 'border-gray-200 bg-gray-50 opacity-60' 
        : 'border-blue-200 bg-white hover:shadow-lg'
    }`}>
      {/* Module Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
              isCompleted 
                ? 'bg-green-500 text-white' 
                : isLocked 
                ? 'bg-gray-300 text-gray-600' 
                : 'bg-blue-500 text-white'
            }`}>
              {isCompleted ? '✓' : index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                <span>{module.duration}</span>
                <span className="mx-2">•</span>
                <span>{module.lessons.length} lessons</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isCompleted 
                ? 'bg-green-100 text-green-800' 
                : isLocked 
                ? 'bg-gray-100 text-gray-600' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              <status.icon className="w-3 h-3 mr-1 inline" />
              {status.text}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{module.description}</p>

        {/* Module Actions */}
        <div className="flex gap-3">
          {!isLocked && (
            <button
              onClick={() => onStartModule(module.id)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                isCompleted 
                  ? 'bg-green-100 text-green-800 border border-green-300 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={isCompleted}
            >
              {isCompleted ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2 inline" />
                  Completed
                </>
              ) : (
                <>
                  <PlayCircle className="w-4 h-4 mr-2 inline" />
                  Start Module
                </>
              )}
            </button>
          )}
          
          {isCompleted && (
            <button
              onClick={() => onCompleteModule(module.id)}
              className="px-4 py-2 text-green-600 hover:text-green-700 font-medium"
            >
              Review
            </button>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          {/* Lessons */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Lessons ({module.lessons.length})
            </h4>
            <div className="space-y-3">
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                      lesson.type === 'theory' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {lesson.type === 'theory' ? '📖' : '🛠️'}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{lesson.title}</div>
                      <div className="text-sm text-gray-600">{lesson.content}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {lesson.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {module.challenges.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Challenges ({module.challenges.length})
              </h4>
              <div className="space-y-3">
                {module.challenges.map((challenge, challengeIndex) => (
                  <div key={challengeIndex} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-yellow-800 mb-1">{challenge.title}</div>
                        <div className="text-sm text-yellow-700 mb-2">{challenge.description}</div>
                        <div className="flex items-center text-xs text-yellow-600">
                          <Award className="w-3 h-3 mr-1" />
                          {challenge.points} points
                        </div>
                      </div>
                      <button className="ml-4 px-3 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-medium hover:bg-yellow-300 transition-colors">
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Module Progress */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Module Progress</span>
              <span className="text-sm text-gray-500">
                {isCompleted ? '100%' : '0%'} Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCompleted ? 'bg-green-500' : 'bg-blue-500'
                }`}
                style={{ width: isCompleted ? '100%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
