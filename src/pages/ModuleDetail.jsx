import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  PlayCircle,
  CheckCircle,
  Clock,
  Target,
  Award,
  BookOpen,
  Code,
  ChevronRight,
} from 'lucide-react';
import learningTracks from '../data/learningTracks.json';

const ModuleDetail = () => {
  const { trackId, moduleId } = useParams();
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [moduleProgress, setModuleProgress] = useState(0);

  const track = learningTracks.find((t) => t.id === trackId);
  const module = track?.modules.find((m) => m.id === moduleId);

  useEffect(() => {
    if (!track || !module) {
      navigate('/learn');
      return;
    }
    const progress = Math.round((completedLessons.length / module.lessons.length) * 100);
    setModuleProgress(progress);
  }, [track, module, completedLessons, navigate]);

  const markLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

  const getLessonTypeIcon = (type) => {
    switch (type) {
      case 'theory':
        return <BookOpen size={20} />;
      case 'hands-on':
        return <Code size={20} />;
      default:
        return <Target size={20} />;
    }
  };

  if (!track || !module) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-white">
            Module Not Found
          </h2>
          <Link to="/learn" className="mt-2 inline-block font-semibold text-brand hover:underline">
            ← Back to Learning Tracks
          </Link>
        </div>
      </div>
    );
  }

  const lesson = module.lessons[currentLesson];

  return (
    <div className="min-h-screen bg-cream pt-16 dark:bg-night">
      {/* Header */}
      <div className="border-b-4 border-brand bg-cream-deep dark:bg-stone-900/50">
        <div className="container-page py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start">
              <button
                onClick={() => navigate('/learn')}
                className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-300 text-stone-600 transition-colors hover:border-brand hover:text-brand dark:border-stone-600 dark:text-stone-300"
                aria-label="Back to learning tracks"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <nav className="mb-2 flex flex-wrap items-center gap-1 text-sm font-semibold text-stone-500 dark:text-stone-400">
                  <Link to="/learn" className="hover:text-brand">
                    Learning Tracks
                  </Link>
                  <ChevronRight size={14} className="inline" />
                  <span>{track.title}</span>
                  <ChevronRight size={14} className="inline" />
                  <span className="text-stone-900 dark:text-white">{module.title}</span>
                </nav>
                <h1 className="font-display text-3xl font-black text-stone-900 dark:text-white sm:text-4xl">
                  {module.title}
                </h1>
                <p className="mt-2 text-stone-600 dark:text-stone-300">
                  {module.description}
                </p>
              </div>
            </div>
            <div className="shrink-0 rounded-2xl border-2 border-stone-200 bg-white px-5 py-3 text-center dark:border-stone-700 dark:bg-stone-800">
              <div className="font-display text-3xl font-black text-brand">
                {moduleProgress}%
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-stone-500">
                Complete
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm font-semibold text-stone-600 dark:text-stone-300">
              <span>
                {completedLessons.length} of {module.lessons.length} lessons completed
              </span>
              <span className="inline-flex items-center gap-1 text-brand">
                <Clock size={14} />
                {module.duration}
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div
                className="h-3 rounded-full bg-brand transition-all duration-500"
                style={{ width: `${moduleProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-8 py-10 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {lesson && (
            <div className="card rounded-3xl border-2 p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b-2 border-dashed border-stone-200 pb-5 dark:border-stone-700">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-lighter text-brand">
                    {getLessonTypeIcon(lesson.type)}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-stone-900 dark:text-white">
                      {lesson.title}
                    </h2>
                    <div className="mt-0.5 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                      <span className="rounded-full bg-cream-deep px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide dark:bg-stone-700">
                        {lesson.type}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={13} />
                        {lesson.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => markLessonComplete(lesson.id)}
                  className={
                    isLessonCompleted(lesson.id)
                      ? 'btn bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                      : 'btn-primary'
                  }
                  disabled={isLessonCompleted(lesson.id)}
                >
                  {isLessonCompleted(lesson.id) ? (
                    <>
                      <CheckCircle size={16} /> Completed
                    </>
                  ) : (
                    <>
                      <PlayCircle size={16} /> Mark Complete
                    </>
                  )}
                </button>
              </div>

              <div className="whitespace-pre-line rounded-2xl bg-cream-deep p-6 leading-loose text-stone-700 dark:bg-stone-800 dark:text-stone-200">
                {lesson.content}
              </div>

              {/* Lesson nav */}
              <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-stone-200 pt-5 dark:border-stone-700">
                <button
                  onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                  disabled={currentLesson === 0}
                  className={`btn-secondary !px-4 !py-2 ${
                    currentLesson === 0 ? 'cursor-not-allowed opacity-40' : ''
                  }`}
                >
                  ← Previous
                </button>
                <span className="text-sm font-bold text-stone-500">
                  {currentLesson + 1} of {module.lessons.length}
                </span>
                <button
                  onClick={() =>
                    setCurrentLesson(Math.min(module.lessons.length - 1, currentLesson + 1))
                  }
                  disabled={currentLesson === module.lessons.length - 1}
                  className={`btn-primary !px-4 !py-2 ${
                    currentLesson === module.lessons.length - 1 ? 'cursor-not-allowed opacity-40' : ''
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Challenges */}
          <div className="card mt-6 rounded-3xl border-2">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-stone-900 dark:text-white">
              <Target size={20} className="text-brand" />
              Challenges
            </h3>
            <ul className="mt-4 space-y-3">
              {module.challenges.map((ch) => (
                <li
                  key={ch.id}
                  className="flex items-center justify-between rounded-2xl border-2 border-stone-200 p-4 dark:border-stone-700"
                >
                  <div>
                    <p className="font-display text-base font-bold text-stone-900 dark:text-white">
                      {ch.title}
                    </p>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                      {ch.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-brand-lighter px-3 py-1 text-xs font-black text-brand">
                    {ch.points} pts
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Module info */}
          <div className="card rounded-2xl border-2">
            <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white">
              Module Information
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                <Clock size={16} className="text-brand" />
                Duration: {module.duration}
              </div>
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                <BookOpen size={16} className="text-brand" />
                Lessons: {module.lessons.length}
              </div>
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                <Award size={16} className="text-brand" />
                Challenges: {module.challenges.length}
              </div>
            </div>
          </div>

          {/* Lesson list */}
          <div className="card rounded-2xl border-2">
            <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white">
              Lessons
            </h3>
            <div className="mt-4 space-y-2">
              {module.lessons.map((l, index) => (
                <button
                  key={l.id}
                  onClick={() => setCurrentLesson(index)}
                  className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition-all ${
                    currentLesson === index
                      ? 'border-brand bg-brand-lighter/60'
                      : isLessonCompleted(l.id)
                        ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20'
                        : 'border-stone-200 bg-white hover:border-brand/50 dark:border-stone-700 dark:bg-stone-800'
                  }`}
                >
                  {getLessonTypeIcon(l.type)}
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold text-stone-900 dark:text-white">
                      {l.title}
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      {l.duration}
                    </div>
                  </div>
                  {isLessonCompleted(l.id) && (
                    <CheckCircle size={18} className="shrink-0 text-emerald-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
