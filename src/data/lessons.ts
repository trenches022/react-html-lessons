export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string;
  initialCode: string;
  task: string; 
  solution: string; 
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "HTML Lesson 1: Markup Basics",
    description: "Learn what HTML is and how to create a basic page structure.",
    content:
      "HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to structure content. For example, `<h1>` defines a heading, and `<p>` defines a paragraph.",
    initialCode: "<h1>Hello, World!</h1>\n<p>This is a paragraph.</p>",
    task: "Create a page with a heading 'My Page' and a paragraph 'Welcome to my site'.",
    solution: "<h1>My Page</h1>\n<p>Welcome to my site</p>",
  },
  {
    id: 2,
    title: "HTML Lesson 2: Tags and Attributes",
    description: "Dive into the world of tags and their attributes for content styling.",
    content:
      "Tags can have attributes to provide additional information. For example, the `<a>` tag uses the `href` attribute to create links.",
    initialCode: '<a href="https://example.com">Click me!</a>',
    task: "Create a link with the text 'Visit Google' that points to 'https://google.com'.",
    solution: '<a href="https://google.com">Visit Google</a>',
  },
  {
    id: 3,
    title: "HTML Lesson 3: Forms",
    description: "Master creating interactive forms for user input.",
    content:
      "Forms allow users to input data. Use the `<form>` tag with inputs like `<input>` and `<button>`.",
    initialCode: '<form>\n  <input type="text" placeholder="Your name">\n  <button>Submit</button>\n</form>',
    task: "Create a form with an email input and a submit button.",
    solution: '<form>\n  <input type="email" placeholder="Your email">\n  <button>Submit</button>\n</form>',
  },
  {
    id: 4,
    title: "HTML Lesson 4: Semantic HTML",
    description: "Understand semantic tags for better structure and accessibility.",
    content:
      "Semantic HTML uses tags like `<header>`, `<footer>`, and `<article>` to give meaning to content.",
    initialCode: "<header>\n  <h1>My Website</h1>\n</header>\n<footer>\n  <p>© 2025</p>\n</footer>",
    task: "Create a page with a `<header>` containing a title 'Blog' and a `<footer>` with '© 2025'.",
    solution: "<header>\n  <h1>Blog</h1>\n</header>\n<footer>\n  <p>© 2025</p>\n</footer>",
  },
  {
    id: 5,
    title: "HTML Lesson 5: Lists",
    description: "Learn how to create ordered and unordered lists.",
    content: "HTML supports lists with `<ul>` (unordered) and `<ol>` (ordered). Each item is wrapped in `<li>`.",
    initialCode: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
    task: "Create an ordered list with 3 items: 'Learn', 'Practice', 'Master'.",
    solution: "<ol>\n  <li>Learn</li>\n  <li>Practice</li>\n  <li>Master</li>\n</ol>",
  },
  {
    id: 6,
    title: "HTML Lesson 6: Images",
    description: "Add images to your pages with the img tag.",
    content: "The `<img>` tag embeds images. Use the `src` attribute for the image URL and `alt` for accessibility.",
    initialCode: '<img src="https://via.placeholder.com/150" alt="Placeholder image">',
    task: "Add an image with `src='https://via.placeholder.com/100' and `alt='Test image'`.",
    solution: '<img src="https://via.placeholder.com/100" alt="Test image">',
  },
  {
    id: 7,
    title: "HTML Lesson 7: Tables",
    description: "Create tables to organize data.",
    content: "Tables use `<table>`, `<tr>` (rows), `<th>` (headers), and `<td>` (data).",
    initialCode:
      "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>",
    task: "Create a table with headers 'City' and 'Population', and one row: 'New York', '8M'.",
    solution:
      "<table>\n  <tr>\n    <th>City</th>\n    <th>Population</th>\n  </tr>\n  <tr>\n    <td>New York</td>\n    <td>8M</td>\n  </tr>\n</table>",
  },
  {
    id: 8,
    title: "HTML Lesson 8: Links and Navigation",
    description: "Create hyperlinks and navigation menus.",
    content: "The `<a>` tag creates links, and `<nav>` organizes navigation.",
    initialCode: '<nav>\n  <a href="#home">Home</a>\n  <a href="#about">About</a>\n</nav>',
    task: "Create a `<nav>` with links 'Home' (#home) and 'Contact' (#contact).",
    solution: '<nav>\n  <a href="#home">Home</a>\n  <a href="#contact">Contact</a>\n</nav>',
  },
  {
    id: 9,
    title: "HTML Lesson 9: Divs and Spans",
    description: "Use div and span for layout and styling.",
    content: "`<div>` is a block-level container, and `<span>` is inline.",
    initialCode: "<div>\n  <span>Inline text</span>\n  <p>Block text</p>\n</div>",
    task: "Create a `<div>` with a `<span>` saying 'Hello' and a `<p>` saying 'World'.",
    solution: "<div>\n  <span>Hello</span>\n  <p>World</p>\n</div>",
  },
  {
    id: 10,
    title: "HTML Lesson 10: Meta Tags",
    description: "Add metadata to your pages with meta tags.",
    content: "Meta tags in the `<head>` section provide information like charset or viewport settings.",
    initialCode:
      '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>',
    task: "Add a `<head>` with a charset meta tag and a description meta tag saying 'My site'.",
    solution:
      '<head>\n  <meta charset="UTF-8">\n  <meta name="description" content="My site">\n</head>',
  },
  {
    id: 11,
    title: "HTML Lesson 11: Audio and Video",
    description: "Embed multimedia content with audio and video tags.",
    content: "Use `<audio>` and `<video>` to add sound and video.",
    initialCode: '<video controls>\n  <source src="sample.mp4" type="video/mp4">\n</video>',
    task: "Embed an audio file with `controls` and a source 'sample.mp3' (type 'audio/mpeg').",
    solution: '<audio controls>\n  <source src="sample.mp3" type="audio/mpeg">\n</audio>',
  },
  {
    id: 12,
    title: "HTML Lesson 12: Iframes",
    description: "Embed external content with iframes.",
    content: "The `<iframe>` tag embeds other web pages or content.",
    initialCode: '<iframe src="https://www.example.com" width="300" height="200"></iframe>',
    task: "Create an iframe with `src='https://www.google.com'`, width 200, height 150.",
    solution: '<iframe src="https://www.google.com" width="200" height="150"></iframe>',
  },
  {
    id: 13,
    title: "HTML Lesson 13: Data Attributes",
    description: "Use custom data attributes for interactivity.",
    content: "Custom attributes start with `data-` and can store extra info.",
    initialCode: '<button data-info="click-me">Click me!</button>',
    task: "Create a `<div>` with a `data-type='info'` attribute and text 'Test'.",
    solution: '<div data-type="info">Test</div>',
  },
  {
    id: 14,
    title: "HTML Lesson 14: Accessibility",
    description: "Improve accessibility with ARIA and best practices.",
    content: "ARIA attributes like `role` and `aria-label` enhance accessibility.",
    initialCode: '<button aria-label="Close dialog">Close</button>',
    task: "Create a button with `role='button'` and `aria-label='Save changes'`.",
    solution: '<button role="button" aria-label="Save changes">Save</button>',
  },
  {
    id: 15,
    title: "HTML Lesson 15: Putting It All Together",
    description: "Combine everything into a small project.",
    content: "Use what you’ve learned to create a complete HTML page with a header, navigation, form, and content!",
    initialCode:
      "<header>\n  <h1>My Page</h1>\n</header>\n<nav>\n  <a href='#'>Home</a>\n</nav>\n<form>\n  <input type='text'>\n  <button>Send</button>\n</form>",
    task: "Build a page with a `<header>` ('Project'), `<nav>` (2 links), and `<form>` (text input + button).",
    solution:
      "<header>\n  <h1>Project</h1>\n</header>\n<nav>\n  <a href='#home'>Home</a>\n  <a href='#about'>About</a>\n</nav>\n<form>\n  <input type='text' placeholder='Enter text'>\n  <button>Submit</button>\n</form>",
  },
];