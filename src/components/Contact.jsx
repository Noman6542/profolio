const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // mailto link
    window.location.href = `mailto:mdaanoman6@gmail.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
  };

  return (
    <section
      id="contact"
      className="font-display bg-background-light dark:bg-background-dark relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-repeat bg-center opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 blur-[150px] rounded-full z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/30 blur-[150px] rounded-full z-0"></div>

      <main className="w-full max-w-2xl mx-auto z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact
          </h1>
        </div>

        <div className="bg-white/5 dark:bg-gray-900/20 backdrop-blur-xl border border-white/10 dark:border-gray-800/50 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="block w-full rounded-lg border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:ring-primary focus:border-primary transition duration-300 p-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:ring-primary focus:border-primary transition duration-300 p-3"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full rounded-lg border-gray-300 dark:border-gray-800 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-gray-200 placeholder-gray-500 focus:ring-primary focus:border-primary transition duration-300 p-3"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary transition duration-300"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-6">
          {[
            {
              name: "GitHub",
              link: "https://github.com/Noman6542",
              icon: (
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
              ),
            },
            {
              name: "Email",
              link: "mailto:mdaanoman6@gmail.com",
              icon: (
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              ),
            },
            {
              name: "WhatsApp",
              link: "https://wa.me/8801577036525",
              icon: (
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.786-1.48-1.755-1.653-2.052-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.074-.149-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51-.173-.007-.372-.008-.571-.008-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 2.115.648 4.073 1.755 5.707L2 22l4.414-1.728A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              ),
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/abdullah-al-6-noman/",
              icon: (
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
              ),
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Contact;
