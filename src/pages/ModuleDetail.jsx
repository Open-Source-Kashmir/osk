import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, CheckCircle, Clock, Target, Award, BookOpen, Code, Users, ChevronRight } from 'lucide-react';
import learningTracks from '../data/learningTracks.json';

const ModuleDetail = () => {
  const { trackId, moduleId } = useParams();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [moduleProgress, setModuleProgress] = useState(0);

  const track = learningTracks.find(t => t.id === trackId);
  const module = track?.modules.find(m => m.id === moduleId);

  useEffect(() => {
    if (!track || !module) {
      navigate('/learning');
      return;
    }
    
    // Calculate progress based on completed lessons
    const progress = Math.round((completedLessons.length / module.lessons.length) * 100);
    setModuleProgress(progress);
  }, [track, module, completedLessons, navigate]);

  const markLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    }
  };

  const isLessonCompleted = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  const getLessonTypeIcon = (type) => {
    switch (type) {
      case 'theory': return <BookOpen className="w-5 h-5" />;
      case 'hands-on': return <Code className="w-5 h-5" />;
      default: return <Target className="w-5 h-5" />;
    }
  };

  const getLessonTypeColor = (type) => {
    switch (type) {
      case 'theory': return 'bg-blue-100 text-blue-800';
      case 'hands-on': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!track || !module) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Module Not Found</h2>
          <Link to="/learning" className="text-blue-600 hover:text-blue-700">
            ← Back to Learning Tracks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/learning')}
                className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <nav className="text-sm text-gray-600 mb-2">
                  <Link to="/learning" className="hover:text-blue-600">Learning Tracks</Link>
                  <ChevronRight className="w-4 h-4 inline mx-2" />
                  <span>{track.title}</span>
                  <ChevronRight className="w-4 h-4 inline mx-2" />
                  <span className="text-gray-900 font-medium">{module.title}</span>
                </nav>
                <h1 className="text-3xl font-bold text-gray-900">{module.title}</h1>
                <p className="text-gray-600 mt-2">{module.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{moduleProgress}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{completedLessons.length} of {module.lessons.length} lessons completed</span>
              <span>{module.duration}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${moduleProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Current Lesson */}
            {module.lessons.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {getLessonTypeIcon(module.lessons[currentLesson]?.type)}
                    <div className="ml-3">
                      <h2 className="text-xl font-bold text-gray-900">
                        {module.lessons[currentLesson]?.title}
                      </h2>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLessonTypeColor(module.lessons[currentLesson]?.type)}`}>
                          {module.lessons[currentLesson]?.type}
                        </span>
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        <span>{module.lessons[currentLesson]?.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => markLessonComplete(module.lessons[currentLesson]?.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isLessonCompleted(module.lessons[currentLesson]?.id)
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={isLessonCompleted(module.lessons[currentLesson]?.id)}
                  >
                    {isLessonCompleted(module.lessons[currentLesson]?.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 inline" />
                        Completed
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-4 h-4 mr-2 inline" />
                        Mark Complete
                      </>
                    )}
                  </button>
                </div>

                <div className="prose max-w-none">
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Lesson Content</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {module.lessons[currentLesson]?.content}
                    </p>
                  </div>

                  {/* Lesson Navigation */}
                  <div className="flex justify-between items-center pt-6 border-t">
                    <button
                      onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                      disabled={currentLesson === 0}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        currentLesson === 0
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-600 text-white hover:bg-gray-700'
                      }`}
                    >
                      ← Previous
                    </button>
                    <span className="text-sm text-gray-600">
                      {currentLesson + 1} of {module.lessons.length}
                    </span>
                    <button
                      onClick={() => setCurrentLesson(Math.min(module.lessons.length - 1, currentLesson + 1))}
                      disabled={currentLesson === module.lessons.length - 1}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        currentLesson === module.lessons.length - 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Challenges */}
            {module.challenges.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-yellow-600" />
                  Challenges ({module.challenges.length})
                </h3>
                <div className="space-y-4">
                  {module.challenges.map((challenge, index) => (
                    <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                            {challenge.title}
                          </h4>
                          <p className="text-yellow-700 mb-3">{challenge.description}</p>
                          <div className="flex items-center text-sm text-yellow-600">
                            <Award className="w-4 h-4 mr-1" />
                            <span>{challenge.points} points</span>
                          </div>
                        </div>
                        <button className="ml-4 px-4 py-2 bg-yellow-200 text-yellow-800 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
                          Start Challenge
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Module Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Duration: {module.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="w-4 h-4 mr-2" />
                  <span>Lessons: {module.lessons.length}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Challenges: {module.challenges.length}</span>
                </div>
              </div>
            </div>

            {/* Lesson List */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lessons</h3>
              <div className="space-y-2">
                {module.lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      currentLesson === index
                        ? 'bg-blue-100 border-2 border-blue-300'
                        : isLessonCompleted(lesson.id)
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {getLessonTypeIcon(lesson.type)}
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">{lesson.title}</div>
                          <div className="text-sm text-gray-600">{lesson.duration}</div>
                        </div>
                      </div>
                      {isLessonCompleted(lesson.id) && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Lessons Completed</span>
                  <span className="font-medium">{completedLessons.length}/{module.lessons.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${moduleProgress}%` }}
                  ></div>
                </div>
                <div className="text-center text-sm text-gray-600">
                  {moduleProgress}% Complete
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Complete all lessons in this module</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Work through the challenges</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Apply what you've learned in real projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
