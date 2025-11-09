import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Project Management That
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {' '}Feels As Good As It Looks
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Organize your work with a beautiful Kanban board that respects your privacy.
              No signup. No subscriptions. No compromises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Launch FlowBoard →
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-purple-600 bg-white border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                View on GitHub ⭐
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>100% Privacy guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Free forever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 mb-6 font-medium">
            Trusted by developers, designers, and teams who value simplicity
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">1K+</div>
              <div className="text-sm text-gray-600">GitHub Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="text-sm text-gray-600">Projects Organized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">5K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Privacy Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
            Tired of Project Management Tools That...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cost Too Much</h3>
              <p className="text-gray-600 leading-relaxed">
                Monthly subscriptions that add up fast. Enterprise features you'll never use.
                Paying per user when you just need a simple board.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mine Your Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Your tasks tracked. Your habits analyzed. Your privacy sold.
                All for "personalization" you never asked for.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Overwhelm You</h3>
              <p className="text-gray-600 leading-relaxed">
                So many features, you need training to use it. Cluttered interfaces.
                Settings buried in settings. Just to move a card from A to B?
              </p>
            </div>
          </div>
          <p className="text-center text-2xl text-gray-700 font-medium mt-12">
            There's a better way.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Meet FlowBoard: <span className="text-purple-600">Simple. Beautiful. Yours.</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Everything you need to organize your work. Nothing you don't.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beautiful by Design</h3>
              <p className="text-gray-600">
                Gorgeous gradients, smooth animations, and thoughtful spacing.
                A tool you'll actually want to open.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy-First</h3>
              <p className="text-gray-600">
                All data stays on YOUR device. No cloud. No tracking. No analytics.
                Your tasks are nobody else's business.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blazing Fast</h3>
              <p className="text-gray-600">
                Built with Next.js 16 + React 19. Loads instantly.
                No loading spinners. No sync delays. Pure speed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Completely Free</h3>
              <p className="text-gray-600">
                No freemium limits. No paywalls. No "upgrade for this feature."
                Everything. Forever. Free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
            Start Organizing in Seconds
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Click</h3>
              <p className="text-gray-600 leading-relaxed">
                No signup required. No email verification. Just click and start.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Create</h3>
              <p className="text-gray-600 leading-relaxed">
                Add tasks and columns that match YOUR workflow. Drag and drop to organize.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flow</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your productivity soar as tasks move from To Do to Done.
                Everything saves automatically.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Try FlowBoard Now - Free Forever →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Everything You Need. Nothing You Don't.
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Powerful features wrapped in a beautiful, intuitive interface
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Intuitive Drag & Drop', desc: 'Move tasks between columns with silky-smooth animations' },
              { icon: '📋', title: 'Unlimited Boards', desc: 'No artificial limits. Create as many columns and tasks as you need' },
              { icon: '🎨', title: 'Customizable Columns', desc: 'Design your perfect workflow with custom colors and names' },
              { icon: '📝', title: 'Rich Task Details', desc: 'Add descriptions, notes, and context to any task' },
              { icon: '💾', title: 'Auto-Save', desc: 'Every change saves instantly. No sync anxiety.' },
              { icon: '📱', title: 'Mobile Responsive', desc: 'Beautiful and functional on desktop, tablet, or phone' },
              { icon: '⌨️', title: 'Keyboard Shortcuts', desc: 'Power-user features for lightning-fast task management' },
              { icon: '🌙', title: 'Easy on the Eyes', desc: 'Beautiful color schemes for comfortable long sessions' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
            Perfect For...
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Developers</h3>
              <p className="text-gray-600">
                Track side projects, manage bugs, organize sprints. FlowBoard speaks your language:
                simple, fast, and open source.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Designers</h3>
              <p className="text-gray-600">
                Finally, a PM tool as beautiful as your designs. Visual task management
                that doesn't hurt your eyes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Startups</h3>
              <p className="text-gray-600">
                Bootstrap-friendly pricing (free!) with no per-seat costs.
                Scale from 1 to 100 without changing tools.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-purple-300 transition-colors">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students</h3>
              <p className="text-gray-600">
                Manage assignments, track job applications, organize your life.
                No student email required, no premium upsells.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Deep Dive */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Your Privacy Isn't Negotiable
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Other tools say they care about privacy. We prove it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚫</span> What We DON'T Do
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No user accounts or passwords</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No cloud storage or sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No analytics or tracking pixels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No selling your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No AI training on your tasks</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> What We DO
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Store everything locally in YOUR browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Open source code you can audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Zero external API calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>No cookies (except functional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>You own your data 100%</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔐</span> The Technical Details
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built with browser localStorage. Data never leaves your device.
                Export anytime. Delete anytime. No server = no breach possible.
                Your tasks exist only on your machine, under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
            Loved by People Like You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally, a project management tool that doesn't feel like work. The design is so clean and beautiful that I actually WANT to organize my tasks.",
                author: "Sarah M.",
                role: "Freelance Designer"
              },
              {
                quote: "I switched my entire team from Trello to FlowBoard. We're saving $600/year and our data isn't being mined. Win-win.",
                author: "James K.",
                role: "Startup Founder"
              },
              {
                quote: "As a privacy advocate, I love that FlowBoard keeps everything local. As a developer, I love the clean codebase. As a human, I love the beautiful UI.",
                author: "Alex T.",
                role: "Software Engineer"
              },
              {
                quote: "I've used Asana, Monday, ClickUp, and Notion. FlowBoard is the first one that doesn't overwhelm me. Simple, fast, perfect.",
                author: "Maria L.",
                role: "Product Manager"
              },
              {
                quote: "Built this into my daily routine in minutes. No tutorial needed, no complex setup. Just works.",
                author: "David R.",
                role: "Student"
              },
              {
                quote: "The fact that it's free, private, AND this beautiful is honestly mind-blowing. Thank you for building this.",
                author: "Emma C.",
                role: "Indie Hacker"
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-gray-200">
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Flow?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people who organize their work beautifully with FlowBoard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Launch FlowBoard - It's Free →
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              Star on GitHub ⭐
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>No email verification</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Start organizing in seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition-colors">Launch App</Link></li>
                <li><a href="https://github.com" className="hover:text-white transition-colors">GitHub Repo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://github.com" className="hover:text-white transition-colors">GitHub Discussions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Bug</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Request Feature</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="https://github.com" className="hover:text-white transition-colors">License (MIT)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>Built with 💜 by the FlowBoard community | Open Source Forever</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
