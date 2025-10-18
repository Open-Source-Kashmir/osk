import { useState, useEffect } from 'react';
import { TrendingUp, Target, Award, Clock, CheckCircle, BookOpen, Users } from 'lucide-react';

const ProgressTracker = ({ userProgress, learningTracks }) => {
  const [stats, setStats] = useState({
    totalModules: 0,
    completedModules: 0,
    currentStreak: 0,
    totalTimeSpent: 0,
    achievements: [],
    nextMilestone: null
  });

  useEffect(() => {
    if (userProgress.currentTrack) {
      const currentTrack = learningTracks.find(t => t.id === userProgress.currentTrack);
      if (currentTrack) {
        const totalModules = currentTrack.modules.length;
        const completedModules = userProgress.completedModules.filter(m => 
          currentTrack.modules.some(module => module.id === m)
        ).length;
        
        setStats(prev => ({
          ...prev,
          totalModules,
          completedModules,
          currentStreak: 7, // Mock data
          totalTimeSpent: completedModules * 2, // Mock data - 2 hours per module
          achievements: [
            { id: 1, name: 'First Steps', description: 'Completed your first module', icon: '🎯', earned: true },
            { id: 2, name: 'Git Master', description: 'Mastered Git fundamentals', icon: '⚡', earned: completedModules >= 2 },
            { id: 3, name: 'Community Helper', description: 'Helped 5 community members', icon: '🤝', earned: false }
          ],
          nextMilestone: {
            name: 'Track Completion',
            description: 'Complete the entire learning track',
            progress: Math.round((completedModules / totalModules) * 100),
            target: 100
          }
        }));
      }
    }
  }, [userProgress, learningTracks]);

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 60) return 'text-blue-600';
    if (progress >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (!userProgress.currentTrack) {
    return (
      <div className="bg-white rounded-xl p-8 text-center shadow-lg">
        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Active Learning Track</h3>
        <p className="text-gray-600 mb-6">Start a learning track to begin tracking your progress.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Browse Learning Tracks
        </button>
      </div>
    );
  }

  const currentTrack = learningTracks.find(t => t.id === userProgress.currentTrack);
  const progressPercentage = Math.round((stats.completedModules / stats.totalModules) * 100);

  return (
    <div className="space-y-6">
      {/* Main Progress Card */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{currentTrack?.title}</h3>
            <p className="text-gray-600">{currentTrack?.description}</p>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-bold ${getProgressColor(progressPercentage)}`}>
              {progressPercentage}%
            </div>
            <div className="text-sm text-gray-500">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{stats.completedModules} of {stats.totalModules} modules completed</span>
            <span>{stats.totalTimeSpent} hours spent</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getProgressBarColor(progressPercentage)}`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stats.completedModules}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stats.totalModules - stats.completedModules}</div>
            <div className="text-sm text-gray-600">Remaining</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stats.currentStreak}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stats.totalTimeSpent}h</div>
            <div className="text-sm text-gray-600">Time Spent</div>
          </div>
        </div>
      </div>

      {/* Next Milestone */}
      {stats.nextMilestone && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-blue-600 mr-2" />
            <h4 className="text-lg font-semibold text-gray-900">Next Milestone</h4>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{stats.nextMilestone.name}</span>
              <span>{stats.nextMilestone.progress}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${stats.nextMilestone.progress}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">{stats.nextMilestone.description}</p>
        </div>
      )}

      {/* Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center mb-4">
          <Award className="w-6 h-6 text-yellow-600 mr-2" />
          <h4 className="text-lg font-semibold text-gray-900">Achievements</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                achievement.earned 
                  ? 'border-yellow-300 bg-yellow-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{achievement.icon}</span>
                <div className={`text-sm font-semibold ${
                  achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                }`}>
                  {achievement.name}
                </div>
              </div>
              <p className={`text-xs ${
                achievement.earned ? 'text-yellow-700' : 'text-gray-500'
              }`}>
                {achievement.description}
              </p>
              {achievement.earned && (
                <div className="mt-2 text-xs text-yellow-600 font-medium">
                  ✓ Earned
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Learning Tips */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">💡 Learning Tips</h4>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Try to maintain a consistent learning schedule</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Practice what you learn by contributing to real projects</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Don't hesitate to ask for help from mentors and the community</span>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Review and reflect on your progress regularly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
