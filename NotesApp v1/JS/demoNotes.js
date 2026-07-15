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
    },
    {
    id: crypto.randomUUID(),
    notebookId: null,
    tags: ["journal", "notes-app", "reflection"],
    createdAt: new Date().toISOString(),
    updatedAt: null,
    compiledAt: null,
    title: "Building the Notes App",
    source: `# Building the Notes App

Today I spent more time working on the notes app and thinking about how the editor should actually feel.

## Panel Animation

The panel animation is starting to make more sense now. At first it felt weird to calculate position, scale, and movement, but now I can see that the panel is basically pretending to start from the clicked note before expanding into its final shape.

The main idea is:

- measure the clicked note
- move the panel to that note
- scale the panel down
- animate it back to its full editor size

## Edit and Preview Mode

I also worked through the edit and preview mode idea. A full select felt unnecessary for only two options, so a small switch makes more sense.

Edit mode should let me write directly, while preview mode should show the compiled version of the note.

## Data Flow

The main thing I noticed is that app structure matters a lot. If the data flow is clear, the UI becomes easier to reason about.

A note should probably keep:

- source text
- compiled HTML
- created date
- updated date
- tags
- notebook id

The interface is just a way to change and display that data.

## Next Steps

Next, I want to make the editor feel stable. The textarea should fill the available space without breaking out of the panel, and the panel layout should use a clean grid with header, content, and footer sections.`,
    compiledHTML: `<h1>Building the Notes App</h1>

<p>Today I spent more time working on the notes app and thinking about how the editor should actually feel.</p>

<h2>Panel Animation</h2>

<p>The panel animation is starting to make more sense now. At first it felt weird to calculate position, scale, and movement, but now I can see that the panel is basically pretending to start from the clicked note before expanding into its final shape.</p>

<p>The main idea is:</p>

<ul>
    <li>measure the clicked note</li>
    <li>move the panel to that note</li>
    <li>scale the panel down</li>
    <li>animate it back to its full editor size</li>
</ul>

<h2>Edit and Preview Mode</h2>

<p>I also worked through the edit and preview mode idea. A full select felt unnecessary for only two options, so a small switch makes more sense.</p>

<p>Edit mode should let me write directly, while preview mode should show the compiled version of the note.</p>

<h2>Data Flow</h2>

<p>The main thing I noticed is that app structure matters a lot. If the data flow is clear, the UI becomes easier to reason about.</p>

<p>A note should probably keep:</p>

<ul>
    <li>source text</li>
    <li>compiled HTML</li>
    <li>created date</li>
    <li>updated date</li>
    <li>tags</li>
    <li>notebook id</li>
</ul>

<p>The interface is just a way to change and display that data.</p>

<h2>Next Steps</h2>

<p>Next, I want to make the editor feel stable. The textarea should fill the available space without breaking out of the panel, and the panel layout should use a clean grid with header, content, and footer sections.</p>`
}
];