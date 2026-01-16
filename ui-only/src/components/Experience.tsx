export function Experience() {
  const projects = [
    {
      title: 'High-Performance API Gateway',
      tech: 'Rust',
      description: 'Built a custom API gateway handling 100k+ req/s with sub-millisecond latency using Tokio and async Rust.',
      metrics: ['100k+ req/s', '<1ms latency', '99.99% uptime'],
    },
    {
      title: 'Distributed Message Queue',
      tech: 'Go',
      description: 'Designed and implemented a fault-tolerant message queue system serving millions of events daily.',
      metrics: ['10M+ events/day', 'Zero data loss', 'Auto-scaling'],
    },
    {
      title: 'Real-time Analytics Engine',
      tech: 'Rust',
      description: 'Created a real-time data processing engine using WebAssembly for edge computing deployments.',
      metrics: ['Real-time processing', 'WASM-powered', 'Edge deployment'],
    },
    {
      title: 'Cloud Infrastructure Platform',
      tech: 'Go',
      description: 'Led development of a Kubernetes-native platform for managing microservices at scale.',
      metrics: ['1000+ services', 'Multi-cloud', 'GitOps'],
    },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Building systems that scale and perform under pressure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.tech === 'Rust' ? 'bg-[var(--rust-orange)]/20 text-[var(--rust-orange)]' : 'bg-[var(--go-cyan)]/20 text-[var(--go-cyan)]'}`}>
                  {project.tech}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
