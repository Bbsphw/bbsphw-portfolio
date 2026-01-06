// src/components/sections/AboutSection.tsx
"use client";

export default function AchievementsSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="space-y-6">
      <header>
        <h1
          id="about-heading"
          className="text-2xl font-medium text-neutral-900 dark:text-neutral-50"
        >
          About
        </h1>
        <p className="mb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          A short story of me.
        </p>
      </header>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      <section>
        <div>
          <p>
            I&apos;m a final-year Computer and Information Engineering student
            at Kasetsart University, Sriracha Campus, with a strong passion for
            software and web development. Over the past few years, I&apos;ve
            honed my skills in JavaScript, React, and Node.js through both
            academic projects and personal learning. I enjoy building
            interactive, user-focused applications that are not only functional
            but also clean and maintainable.
          </p>
          <p>
            What drives me is the challenge of solving real-world problems
            through technology. I take pride in writing efficient and scalable
            code, collaborating in team environments, and continuously learning
            new tools and best practices in modern web development. My
            experience with full-stack development has equipped me to understand
            the big picture while paying attention to the details that matter in
            user experience and system design.
          </p>
          <p>
            Currently, I&apos;m seeking a cooperative internship where I can
            apply my knowledge, contribute to real projects, and grow as a
            developer in a professional setting. I&apos;m excited to bring my
            curiosity, adaptability, and commitment to continuous improvement to
            a team that values innovation and impact.
          </p>
        </div>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />
      <section>
        <div>
          <h2>career</h2>
          <p>My professional career journey</p>
        </div>
        
        <div>
          
        </div>
      </section>

      <section>
        <div>
          <h2></h2>
          <p></p>
        </div>
      </section>
    </section>
  );
}
