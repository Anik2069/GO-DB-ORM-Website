import { motion } from "framer-motion";
import { Github, MapPin, Users, Code, ExternalLink, Terminal, GitBranch, Star } from "lucide-react";

export function Developer() {
  const developerData = {
    name: "Md Anik Islam",
    username: "Anik2069",
    avatar: "https://avatars.githubusercontent.com/u/38640231?v=4",
    bio: "Software Engineer & OSS Contributor",
    location: "Dhaka, Bangladesh",
    repos: 50,
    followers: 18,
    url: "https://github.com/Anik2069",
    originalBio: "The visionary engineer behind Go DB ORM, dedicated to building powerful, type-safe tools for the Golang ecosystem."
  };

  return (
    <section id="developer" className="relative py-12 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-5xl px-4 relative">
        {/* Restored Heading Section */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
          >
            <Terminal className="h-3 w-3" /> Behind the Project
          </motion.div>
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter mb-4 sm:mb-6">
            Meet the <span className="text-gradient">Creator</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-medium px-4">
            {developerData.originalBio}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Profile Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass rounded-[2.5rem] p-6 sm:p-8 border border-white/10 h-full flex flex-col items-center text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
                <img
                  src={developerData.avatar}
                  alt={developerData.name}
                  className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-[2rem] object-cover border-2 border-white/10 shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-background rounded-2xl border border-white/10 flex items-center justify-center shadow-xl">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{developerData.name}</h3>
              <p className="text-primary font-mono text-xs sm:text-sm font-semibold mb-6">{developerData.bio}</p>
              
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center justify-center gap-3 text-muted-foreground bg-white/5 py-3 rounded-2xl border border-white/5">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{developerData.location}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-muted-foreground bg-white/5 py-3 rounded-2xl border border-white/5">
                  <Github className="h-4 w-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium truncate px-2">github.com/{developerData.username}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info & Stats Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6 sm:gap-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="glass rounded-[2rem] p-6 sm:p-8 border border-white/10 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all">
                <div className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{developerData.repos}</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1.5 sm:gap-2">
                  <Code className="h-3 w-3" /> Repositories
                </div>
              </div>
              <div className="glass rounded-[2rem] p-6 sm:p-8 border border-white/10 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all">
                <div className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{developerData.followers}</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1.5 sm:gap-2">
                  <Users className="h-3 w-3" /> Followers
                </div>
              </div>
            </div>

            {/* CTA & Quote Card */}
            <div className="glass rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-white/10 flex-1 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Github className="h-32 w-32" />
              </div>

              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed italic relative z-10 mb-8 sm:mb-0">
                "I believe that the best tools are built with both performance and developer 
                happiness in mind. Go DB ORM is my contribution to making Go development 
                more intuitive."
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-10 relative z-10">
                <a
                  href={developerData.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground text-sm sm:text-base font-bold hover:glow-cyan transition-all shadow-lg shadow-primary/20"
                >
                  <Github className="h-4 sm:h-5 w-4 sm:w-5" />
                  Follow on GitHub
                </a>
                <a
                  href="https://github.com/Anik2069/go-db-orm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 hover:border-primary/30 transition-all text-sm sm:text-base font-bold"
                >
                  <ExternalLink className="h-4 sm:h-5 w-4 sm:w-5" />
                  View Repository
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
