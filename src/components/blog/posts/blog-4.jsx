import React from "react";

export default function Blog4() {
  return (
    <div className="space-y-6">
      <p className="text-gray-500 leading-8">
        Every serious developer eventually builds the same setup again and again.
        Routing. Tailwind. ESLint. Folder structure. Config tweaks.
        <strong> create-bawo-frontend </strong> exists to eliminate that repetition.
      </p>

      <h2 className="text-2xl font-bold   pt-4">
        1. What is create-bawo-frontend?
      </h2>
      <p className=" leading-8">
        <code className="bg-gray-100 text-indigo-600 px-1.5 py-0.5 rounded font-mono text-base">
          npx create-bawo-frontend my-app
        </code>{" "}
        is a CLI scaffolding tool that instantly generates a production-ready
        frontend project with modern best practices preconfigured.
      </p>
      <p className=" leading-8">
        It represents a philosophy: <strong>zero friction development</strong>.
        Instead of configuring your environment, you start building immediately.
      </p>

      <h2 className="text-2xl font-bold   pt-4">
        2. How to Use It
      </h2>
      <p className="text-gray-500 leading-8">
        Installation requires no global setup. Simply run:
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`npx create-bawo-frontend my-app
cd my-app
npm run dev`}
      </pre>
    <p className="text-gray-700 leading-8">
  Within seconds, you’ll have:
</p>

<ul className="list-disc pl-6 mt-3 space-y-2  ">
  <li>React + Vite setup</li>
  <li>TailwindCSS preconfigured</li>
  <li>Clean folder architecture</li>
  <li>Dark mode support</li>
  <li>ESLint & Prettier configured</li>
</ul>

      <h2 className="text-2xl font-bold   pt-4">
        3. What Languages Does It Support?
      </h2>
      <p className="leading-8">
        Currently supported:
      </p>
      <ul className="list-disc pl-6 space-y-2 ">
        <li>JavaScript</li>
        <li>TypeScript (recommended)</li>
      </ul>
      <p className="text-gray-500 leading-8">
        Planned expansion includes optional backend presets using Node.js.
      </p>

      <h2 className="text-2xl font-bold   pt-4">
        4. Industry Usage
      </h2>
      <p className=" leading-8">
        Modern companies use internal scaffolding tools to maintain
        consistency across teams. Tools like this:
      </p>
      <ul className="list-disc pl-6 space-y-2 ">
        <li>Reduce onboarding time</li>
        <li>Standardize architecture</li>
        <li>Prevent configuration drift</li>
        <li>Improve shipping speed</li>
      </ul>
      <p className=" leading-8">
        create-bawo-frontend is designed with the same philosophy —
        scalable structure from day one.
      </p>

      <h2 className="text-2xl font-bold   pt-4">
        5. How to Contribute
      </h2>
      <p className=" leading-8">
        Contributions are welcome. You can:
      </p>
      <ul className="list-disc pl-6 space-y-2 ">
        <li>Submit pull requests</li>
        <li>Open feature requests</li>
        <li>Report bugs</li>
        <li>Suggest improvements to the template</li>
      </ul>
      <p className=" leading-8">
        The project follows a simple contribution guide and clean commit structure.
      </p>

      <h2 className="text-2xl font-bold   pt-4">
        6. What’s New?
      </h2>
      <p className=" leading-8">
        Recent updates include:
      </p>
      <ul className="list-disc pl-6 space-y-2 ">
        <li>Built-in Google Font optimization</li>
        <li>Improved responsive layout defaults</li>
        <li>Cleaner Tailwind configuration</li>
        <li>Faster Vite startup performance</li>
      </ul>

      <h2 className="text-2xl font-bold   pt-4">
        7. Upcoming Implementations
      </h2>
      <p className=" leading-8">
        The roadmap includes:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Svelte preset support</li>
        <li>Next.js preset</li>
        <li>Monorepo starter template</li>
        <li>Built-in authentication scaffolding</li>
      </ul>

      <div className="bg-gray-50 border-l-4   p-6 my-8 italic text-gray-600 text-xl">
        "The best tooling disappears. It just lets you build."
      </div>
    </div>
  );
}