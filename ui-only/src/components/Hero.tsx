import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--rust-orange)] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--go-cyan)] rounded-full blur-[128px] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
          <p className="text-sm text-muted-foreground font-medium">Senior Software Engineer</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Building{' '}
          <span className="bg-gradient-to-r from-[var(--rust-orange)] to-[var(--rust-orange)] bg-clip-text text-transparent">
            High-Performance
          </span>
          <br />
          Systems with{' '}
          <span className="bg-gradient-to-r from-[var(--go-cyan)] to-[var(--go-cyan)] bg-clip-text text-transparent">
            Rust & Go
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Expert in systems programming, backend architecture, and building scalable,
          reliable software that powers mission-critical applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="hero" className="group">
            View Projects
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button size="lg" variant="outline">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
