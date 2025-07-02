const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I'm <span className="text-red-500 font-semibold">Sanidhya Singh</span>
          , a passionate Computer Science Engineering student at Chandigarh
          University with strong interests in full-stack development and IoT. I
          love building efficient, user-centric software and exploring the
          latest technologies.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300">
          Experienced with React, JavaScript, Node.js, Java, and Arduino. My
          journey into tech started with a love for problem-solving and has
          grown into creating real-world projects — from a Java-based customer
          manager to IoT-based health monitoring devices. I'm driven by
          curiosity and a goal to deliver meaningful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
