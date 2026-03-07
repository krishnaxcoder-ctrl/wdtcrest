export function DecorativeDivider() {
    // Generate enough stripes to fill the width
    const stripes = Array.from({ length: 150 });

    return (
        <section className="bg-primary">
            <div className="mx-auto max-w-7xl border-x border-secondary">
                <div className="flex h-24 items-stretch justify-center overflow-x-hidden border-b border-secondary">
                    {stripes.map((_, index) => (
                        <div
                            key={index}
                            className="h-full w-4 flex-none border-l border-secondary bg-gradient-to-r from-primary to-secondary/30"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DecorativeDivider;
