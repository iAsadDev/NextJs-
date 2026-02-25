import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-pink-100 p-12 rounded-xl shadow-lg max-w-5xl mx-auto my-12 font-sans">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-serif text-pink-600 font-bold mb-8">
        I wasted 6 months using React Router.
        <br />
        Then I discovered Next.js routing.
      </h1>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* React Router Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-400">
          <h2 className="text-xl font-semibold mb-4 text-red-600">React Router</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>❌ Write routes manually</li>
            <li>❌ Configure everything yourself</li>
            <li>❌ Forget one import? App breaks</li>
            <li>❌ 3 files just to add one page</li>
          </ul>
        </div>

        {/* Next.js Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Next.js</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>✅ Create a folder = route created</li>
            <li>✅ Zero config</li>
            <li>✅ Automatic code splitting</li>
            <li>✅ Layouts, loading states — built in</li>
          </ul>
        </div>
      </div>

      {/* Quick Example */}
      <div className="bg-pink-50 p-6 rounded-xl shadow-inner mb-8">
        <p className="text-gray-800">
          Next.js → you just do this: <br />
          <span className="font-mono bg-white px-2 py-1 rounded">📁 app/dashboard/page.tsx</span>
          <br />
          Thats it. Route exists. Done.
        </p>
      </div>

      {/* Insight Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <p className="text-gray-700 mb-4">
          The biggest difference nobody talks about? <br />
          <strong>React Router lives in the browser.</strong> <br />
          <strong>Next.js routing lives on the server.</strong> <br />
          That means faster pages, less JavaScript, better SEO. Your users feel it. Google rewards it.
        </p>

        <p className="text-gray-800 italic">
          My honest take: <br />
          React Router = driving a manual car 🚗 <br />
          Next.js routing = Tesla on autopilot 🚀
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-pink-600 font-semibold mb-2">
          If you are still setting up routes manually in 2025… this is your sign to switch.
        </p>
        <p className="text-gray-600">
          ♻️ Repost if this saved someone time <br />
          🔔 Follow for more no-fluff dev tips
        </p>
        <p className="mt-2 text-gray-500 text-sm">
          #NextJS #React #WebDev #Frontend #JavaScript #100DaysOfCode #CodeNewbie #Programming
        </p>
      </div>
    </section>
  );
}