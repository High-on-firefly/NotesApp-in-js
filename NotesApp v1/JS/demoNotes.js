export const demoNotes = [
    {
        id: crypto.randomUUID(),
        notebookId: null,
        tags: ["work"],
        createdAt: new Date().toISOString(),
        updatedAt: null,
        compiledAt: null,
        title: "Meeting Notes",
        source: "## Meeting Notes\n\n- Discuss project\n- Fix bugs",
        compiledHTML: "<h2>Meeting Notes</h2><ul><li>Discuss project</li><li>Fix bugs</li></ul>"
    },
    {
        id: crypto.randomUUID(),
        notebookId: null,
        tags: ["ideas"],
        createdAt: new Date().toISOString(),
        updatedAt: null,
        compiledAt: null,
        title: "Todo App Features",
        source: "## Features\n\n- Search\n- Categories\n- Markdown",
        compiledHTML: "<h2>Features</h2><ul><li>Search</li><li>Categories</li><li>Markdown</li></ul>"
    },
    {
        id: crypto.randomUUID(),
        notebookId: null,
        tags: ["personal"],
        createdAt: new Date().toISOString(),
        updatedAt: null,
        compiledAt: null,
        title: "Shopping List",
        source: "- Milk\n- Eggs\n- Bread",
        compiledHTML: "<ul><li>Milk</li><li>Eggs</li><li>Bread</li></ul>"
    },
    {
        id: crypto.randomUUID(),
        notebookId: null,
        tags: ["react"],
        createdAt: new Date().toISOString(),
        updatedAt: null,
        compiledAt: null,
        title: "React Notes",
        source: "### Components\n\nEverything is a component.",
        compiledHTML: "<h3>Components</h3><p>Everything is a component.</p>"
    },
    {
        id: crypto.randomUUID(),
        notebookId: null,
        tags: ["journal"],
        createdAt: new Date().toISOString(),
        updatedAt: null,
        compiledAt: null,
        title: "Daily Journal",
        source: "Today I worked on the notes app animation.",
        compiledHTML: "<p>Today I worked on the notes app animation.</p>"
    }
];