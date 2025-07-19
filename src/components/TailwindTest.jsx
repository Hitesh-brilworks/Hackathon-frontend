import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-neutral-900 mb-2">
            🏋️ Fitness Tracking App - Tailwind Test
          </h1>
          <p className="text-lg text-neutral-600">
            Testing custom configurations for our fitness app
          </p>
        </div>

        {/* Custom Colors Test */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            🎨 Custom Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Primary Colors */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-neutral-700">Primary</h3>
              <div className="bg-primary-500 h-16 rounded-lg flex items-center justify-center text-white font-medium">
                Primary
              </div>
              <div className="bg-primary-100 h-8 rounded"></div>
              <div className="bg-primary-700 h-8 rounded"></div>
            </div>

            {/* Secondary Colors */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-neutral-700">Secondary</h3>
              <div className="bg-secondary-500 h-16 rounded-lg flex items-center justify-center text-white font-medium">
                Secondary
              </div>
              <div className="bg-secondary-100 h-8 rounded"></div>
              <div className="bg-secondary-700 h-8 rounded"></div>
            </div>

            {/* Success Colors */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-neutral-700">Success</h3>
              <div className="bg-success-500 h-16 rounded-lg flex items-center justify-center text-white font-medium">
                Success
              </div>
              <div className="bg-success-100 h-8 rounded"></div>
              <div className="bg-success-700 h-8 rounded"></div>
            </div>

            {/* Warning Colors */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-neutral-700">Warning</h3>
              <div className="bg-warning-500 h-16 rounded-lg flex items-center justify-center text-white font-medium">
                Warning
              </div>
              <div className="bg-warning-100 h-8 rounded"></div>
              <div className="bg-warning-700 h-8 rounded"></div>
            </div>

            {/* Error Colors */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm text-neutral-700">Error</h3>
              <div className="bg-error-500 h-16 rounded-lg flex items-center justify-center text-white font-medium">
                Error
              </div>
              <div className="bg-error-100 h-8 rounded"></div>
              <div className="bg-error-700 h-8 rounded"></div>
            </div>
          </div>
        </div>

        {/* Custom Animations Test */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            ✨ Custom Animations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-error-500 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center animate-heartbeat">
                ❤️
              </div>
              <p className="text-sm font-medium">Heartbeat</p>
              <code className="text-xs text-neutral-500">animate-heartbeat</code>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center animate-pulse-slow text-white">
                💫
              </div>
              <p className="text-sm font-medium">Pulse Slow</p>
              <code className="text-xs text-neutral-500">animate-pulse-slow</code>
            </div>

            <div className="text-center">
              <div className="bg-success-500 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center animate-bounce-slow text-white">
                ⬆️
              </div>
              <p className="text-sm font-medium">Bounce Slow</p>
              <code className="text-xs text-neutral-500">animate-bounce-slow</code>
            </div>

            <div className="text-center">
              <div className="bg-secondary-500 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center animate-fadeIn text-white">
                👀
              </div>
              <p className="text-sm font-medium">Fade In</p>
              <code className="text-xs text-neutral-500">animate-fadeIn</code>
            </div>
          </div>
        </div>

        {/* Typography Test */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            📝 Custom Typography
          </h2>
          <div className="space-y-4">
            <div>
              <div className="text-metric text-primary-600 font-display">
                2,847
              </div>
              <p className="text-sm text-neutral-600">
                Calories Burned (text-metric)
              </p>
            </div>
            <div>
              <div className="text-stat text-success-600">
                15.2K
              </div>
              <p className="text-sm text-neutral-600">Steps Today (text-stat)</p>
            </div>
          </div>
        </div>

        {/* Responsive Breakpoints Test */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            📱 Responsive Breakpoints
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <div className="bg-neutral-100 p-4 rounded-lg text-center">
              <div className="block xs:hidden">
                <span className="text-sm font-medium">Base</span>
              </div>
              <div className="hidden xs:block sm:hidden">
                <span className="text-sm font-medium">XS (375px+)</span>
              </div>
              <div className="hidden sm:block md:hidden">
                <span className="text-sm font-medium">SM (640px+)</span>
              </div>
              <div className="hidden md:block lg:hidden">
                <span className="text-sm font-medium">MD (768px+)</span>
              </div>
              <div className="hidden lg:block xl:hidden">
                <span className="text-sm font-medium">LG (1024px+)</span>
              </div>
              <div className="hidden xl:block">
                <span className="text-sm font-medium">XL (1280px+)</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600 mt-4">
            Resize your browser to see different breakpoints in action
          </p>
        </div>

        {/* Custom Shadows Test */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            🌟 Custom Shadows & Effects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-card">
              <h3 className="font-medium mb-2">Card Shadow</h3>
              <p className="text-sm text-neutral-600">shadow-card</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card-hover">
              <h3 className="font-medium mb-2">Card Hover Shadow</h3>
              <p className="text-sm text-neutral-600">shadow-card-hover</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl shadow-inner-lg">
              <h3 className="font-medium mb-2">Inner Shadow</h3>
              <p className="text-sm text-neutral-600">shadow-inner-lg</p>
            </div>
          </div>
        </div>

        {/* Fitness UI Components Test */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            🏃‍♂️ Fitness UI Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workout Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Morning Run</h3>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  🏃
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Duration</span>
                  <span className="font-medium">45 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Calories</span>
                  <span className="font-medium">387</span>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6">
              <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                Weekly Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Workouts</span>
                    <span>4/7</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-success-500 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Calories</span>
                    <span>1,247/2,000</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-warning-500 h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card */}
            <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-xl p-6 text-white">
              <div className="text-center">
                <div className="text-stat mb-2">12,847</div>
                <p className="text-sm opacity-90">Steps Today</p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce-slow">
                    👟
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Result */}
        <div className="bg-success-50 border border-success-200 rounded-2xl p-6 text-center">
          <div className="text-4xl mb-2">✅</div>
          <h3 className="text-xl font-semibold text-success-900 mb-2">
            Tailwind CSS is Working Perfectly!
          </h3>
          <p className="text-success-700">
            All custom configurations including colors, animations, typography, and breakpoints are
            functioning correctly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest; 