const impacts = [
  { title: 'Revenue Managed', value: '20 Billion+' },
  { title: 'Zero Compliance', value: 'Penalties, Ever.' },
  { title: 'Trusted by 400+', value: 'Growing Startups' },
  { title: '40 Years Combined', value: 'Expertise' },
];

export function ImpactSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Our Impact</h2>
           <p className="mt-2 text-lg text-muted-foreground">The numbers that matter to our clients.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <div key={impact.title} className="rounded-xl bg-card p-6 text-card-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
              <p className="text-2xl font-bold text-primary">{impact.value}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{impact.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
