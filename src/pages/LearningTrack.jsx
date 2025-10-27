import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Users, CheckCircle, PlayCircle, Target, Award, ArrowRight } from 'lucide-react';
import learningTracks from '../data/learningTracks.json';

const LearningTrack = () => {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [userProgress, setUserProgress] = useState({
    currentTrack: null,
    completedModules: [],
    currentModule: null,
    progress: 0
  });

  const getTrackColor = (color) => {
    const colors = {
      green: 'from-green-500 to-green-700',
      blue: 'from-blue-500 to-blue-700',
      red: 'from-red-500 to-red-700'
    };
    return colors[color] || 'from-gray-500 to-gray-700';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-blue-100 text-blue-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  const calculateProgress = (trackId) => {
    const track = learningTracks.find(t => t.id === trackId);
    if (!track) return 0;
    
    const completedModules = userProgress.completedModules.filter(m => 
      track.modules.some(module => module.id === m)
    );
    
    return Math.round((completedModules.length / track.modules.length) * 100);
  };

  const isModuleCompleted = (moduleId) => {
    return userProgress.completedModules.includes(moduleId);
  };

  const isModuleLocked = (trackId, moduleId) => {
    const track = learningTracks.find(t => t.id === trackId);
    const moduleIndex = track.modules.findIndex(m => m.id === moduleId);
    
    if (moduleIndex === 0) return false;
    
    const previousModule = track.modules[moduleIndex - 1];
    return !isModuleCompleted(previousModule.id);
  };

  const startTrack = (trackId) => {
    setUserProgress(prev => ({
      ...prev,
      currentTrack: trackId,
      currentModule: learningTracks.find(t => t.id === trackId)?.modules[0]?.id || null
    }));
    setSelectedTrack(trackId);
  };

  const completeModule = (moduleId) => {
    if (!userProgress.completedModules.includes(moduleId)) {
      setUserProgress(prev => ({
        ...prev,
        completedModules: [...prev.completedModules, moduleId],
        progress: calculateProgress(prev.currentTrack)
      }));
    }
  };

  const navigateToModule = (trackId, moduleId) => {
    navigate(`/learning/${trackId}/${moduleId}`);
  };

  const stats = [
    { label: 'Total Tracks', value: learningTracks.length, icon: BookOpen },
    { label: 'Total Modules', value: learningTracks.reduce((sum, track) => sum + track.modules.length, 0), icon: Target },
    { label: 'Active Learners', value: '150+', icon: Users },
    { label: 'Completion Rate', value: '85%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Learning Tracks</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master open source development through structured, hands-on learning paths. 
              From complete beginner to community leader, we've got you covered.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each track is designed to build upon the previous one, ensuring a solid foundation for your open source journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningTracks.map((track) => (
              <div key={track.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                {/* Track Header */}
                <div className={`bg-gradient-to-r ${getTrackColor(track.color)} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{track.icon}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(track.difficulty)}`}>
                      {track.difficulty}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                  <p className="text-blue-100 mb-4">{track.description}</p>
                  <div className="flex items-center text-blue-100">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{track.duration}</span>
                  </div>
                </div>

                {/* Track Content - flex-grow to push button down */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Modules ({track.modules.length})</h4>
                    <div className="space-y-2">
                      {track.modules.map((module, index) => (
                        <div key={module.id} className="flex items-center text-sm text-gray-600">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3 text-xs font-semibold">
                            {index + 1}
                          </div>
                          <span>{module.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Prerequisites</h4>
                    {track.prerequisites.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {track.prerequisites.map((prereq, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {prereq}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">No prerequisites</span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Rewards</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.rewards.map((reward, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                          {reward}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {userProgress.currentTrack === track.id && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{calculateProgress(track.id)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${calculateProgress(track.id)}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Action Button */}
                  <button
                    onClick={() => startTrack(track.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      userProgress.currentTrack === track.id
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : `bg-gradient-to-r ${getTrackColor(track.color)} text-white hover:shadow-lg`
                    }`}
                  >
                    {userProgress.currentTrack === track.id ? 'Continue Learning' : 'Start Track'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Track Details */}
      {selectedTrack && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {learningTracks.find(t => t.id === selectedTrack)?.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {learningTracks.find(t => t.id === selectedTrack)?.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedTrack(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningTracks.find(t => t.id === selectedTrack)?.modules.map((module, index) => (
                <div 
                  key={module.id} 
                  onClick={() => !isModuleLocked(selectedTrack, module.id) && navigateToModule(selectedTrack, module.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    isModuleLocked(selectedTrack, module.id)
                      ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                      : isModuleCompleted(module.id)
                      ? 'border-green-200 bg-green-50 cursor-pointer hover:shadow-lg'
                      : 'border-blue-200 bg-white hover:shadow-lg cursor-pointer'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                        isModuleCompleted(module.id)
                          ? 'bg-green-500 text-white'
                          : isModuleLocked(selectedTrack, module.id)
                          ? 'bg-gray-300 text-gray-600'
                          : 'bg-blue-500 text-white'
                      }`}>
                        {isModuleCompleted(module.id) ? '✓' : index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.duration}</p>
                      </div>
                    </div>
                    {isModuleLocked(selectedTrack, module.id) && (
                      <span className="text-xs text-gray-500">🔒 Locked</span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{module.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Lessons ({module.lessons.length})</h4>
                    <div className="space-y-1">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                          <span>{lesson.title}</span>
                          <span className="ml-auto text-xs text-gray-500">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {module.challenges.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenges</h4>
                      {module.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-2">
                          <div className="font-medium text-yellow-800">{challenge.title}</div>
                          <div className="text-sm text-yellow-700">{challenge.description}</div>
                          <div className="text-xs text-yellow-600 mt-1">{challenge.points} points</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {!isModuleLocked(selectedTrack, module.id) && (
                      <button
                        onClick={() => navigateToModule(selectedTrack, module.id)}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                          isModuleCompleted(module.id)
                            ? 'bg-green-100 text-green-800 border border-green-300'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {isModuleCompleted(module.id) ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2 inline" />
                            View Module
                          </>
                        ) : (
                          <>
                            <PlayCircle className="w-4 h-4 mr-2 inline" />
                            Start Module
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-auto">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Ready to Start Your Open Source Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who are building the future through open source.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="border-2 border-gray-300 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
      </section>
    </div>
  );
};

export default LearningTrack;
