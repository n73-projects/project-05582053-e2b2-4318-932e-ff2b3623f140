export function Skills() {
  const skills = [
    {
      name: 'Rust',
      icon: '🦀',
      description: 'Systems programming, async runtime, WebAssembly, embedded systems',
      color: 'rust',
      level: 'Expert',
    },
    {
      name: 'Go',
      icon: '🔷',
      description: 'Microservices, concurrent systems, CLI tools, cloud-native applications',
      color: 'go',
      level: 'Expert',
    },
  ];

  const additionalSkills = [
    'Distributed Systems',
    'Kubernetes & Docker',
    'gRPC & REST APIs',
    'PostgreSQL & Redis',
    'CI/CD',
    'System Design',
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Expertise</h2>
          <p className="text-xl text-muted-foreground">
            Deep technical knowledge in performance-critical technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative bg-card border border-border rounded-2xl p-8 hover:border-${skill.color === 'rust' ? '[var(--rust-orange)]' : '[var(--go-cyan)]'} transition-all duration-300 hover:shadow-[var(--shadow-glow-${skill.color})]`}
            >
              <div className={`absolute inset-0 bg-[var(--gradient-${skill.color})] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{skill.icon}</div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${skill.color === 'rust' ? 'bg-[var(--rust-orange)]/20 text-[var(--rust-orange)]' : 'bg-[var(--go-cyan)]/20 text-[var(--go-cyan)]'}`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{skill.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Additional Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
