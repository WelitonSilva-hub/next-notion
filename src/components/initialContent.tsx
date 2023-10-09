export const initialContent = `
  <h1>The Power of Tailwind CSS: Streamlining Web Development</h1>
  <p>
    In the ever-evolving world of web development, designers and developers
    are constantly seeking ways to improve efficiency without sacrificing
    the quality of their projects. One tool that has gained immense
    popularity in recent years is Tailwind CSS. Tailwind CSS is a
    utility-first CSS framework that offers a fresh approach to styling web
    applications and websites. In this blog post, we'll explore what
    Tailwind CSS is, its advantages, and why it has become a go-to choice
    for many developers.
  </p>
  <p>
    You can learn more about this at <a href="">rocketseat.com.br</a>
  </p>
  <h2>What is Tailwind CSS?</h2>
  <p>
    Tailwind CSS, created by Adam Wathan, is a highly customizable,
    low-level CSS framework that provides a set of utility classes for
    building user interfaces. Instead of writing custom CSS styles for each
    element in your project, you use pre-defined classes to apply styles
    directly to your HTML elements. These utility classes are designed to be
    highly composable, allowing you to create complex layouts and designs by
    combining them.
  </p>
  <h3>Advantages of Tailwind CSS:</h3>
  <ol>
    <li>
      <strong>Rapid Development:</strong> Tailwind CSS accelerates the
      development process by eliminating the need to write custom CSS
      styles. Developers can focus on building features and layouts without
      getting bogged down in writing and maintaining CSS code. This speed
      can be especially valuable in agile development environments.
    </li>
    <li>
      <strong>Highly Maintainable:</strong> One of the primary advantages of
      Tailwind CSS is its maintainability. When you rely on utility classes,
      it's easy to understand and modify styles because they are directly
      visible in your HTML markup. This makes it simple for teams to
      collaborate and maintain consistency throughout a project.
    </li>
    <li>
      <strong>Component-Friendly:</strong> Tailwind CSS complements
      component-based architectures like those in frameworks such as React,
      Vue, or Angular. You can apply utility classes directly to your
      components, which makes it easy to create encapsulated and reusable UI
      components.
    </li>
    <li>
      <strong>Responsive Design:</strong> Creating responsive designs is
      straightforward with Tailwind CSS. The framework provides classes for
      responsive breakpoints, allowing you to define styles that adapt to
      various screen sizes without writing custom media queries.
    </li>
    <li>
      <strong>Customization:</strong> Tailwind CSS is highly customizable.
      You can modify or extend its default configuration to match your
      project's design system. This flexibility ensures that you're not
      locked into a particular look or feel.
    </li>
    <li>
      <strong>Optimized for Performance:</strong> Tailwind CSS generates
      highly optimized and minimal CSS output. This means that you're not
      burdening your website or application with excessive CSS code,
      resulting in faster load times.
    </li>
    <li>
      <strong>Active Community and Ecosystem:</strong> Tailwind CSS boasts
      an active and supportive community. You'll find numerous resources,
      plugins, and extensions to enhance your development workflow.
      Additionally, the official documentation is comprehensive and easy to
      follow.
    </li>
    <li>
      <strong>Learning Curve:</strong> Although learning a new framework
      might seem daunting, Tailwind CSS has a relatively shallow learning
      curve compared to some other CSS methodologies. It's accessible to
      both experienced and novice developers.
    </li>
  </ol>
  <h2>Getting Started with Tailwind CSS:</h2>
  <p>Getting started with Tailwind CSS is relatively straightforward:</p>
  <ol>
    <li>
      <strong>Installation:</strong> You can install Tailwind CSS via npm or
      yarn:
      <pre>
        <code>npm install tailwindcss</code>
      </pre>
      After installation, you'll need to create a configuration file using
      the <code>npx tailwindcss init</code> command.
    </li>
    <li>
      <strong>Integrate with Your Project:</strong> Integrate Tailwind CSS
      into your project by including the framework's CSS file in your HTML
      or importing it into your JavaScript files if you're using a bundler
      like Webpack.
    </li>
    <li>
      <strong>Write HTML with Utility Classes:</strong> Start writing your
      HTML markup using Tailwind CSS utility classes to style your elements.
      For example:
      <pre>
        <code className=language-javascript>console.log('Hello World')</code>
      </pre>
    </li>
    <li>
      <strong>Customize (Optional):</strong> If needed, you can customize
      Tailwind CSS by modifying the configuration file you created earlier.
      This allows you to define your own colors, fonts, breakpoints, and
      more.
    </li>
    <li>
      <strong>Build for Production:</strong> Before deploying your project
      to production, use the <code>npx tailwindcss build</code> command to
      generate a minimized and optimized CSS file.
    </li>
  </ol>
  <h2>Code Examples:</h2>
  <p>
    Here are some code examples demonstrating the use of Tailwind CSS
    classes:
  </p>

  <div className="language-html bg-blue-500 text-white p-4">
    This is a Tailwind CSS styled element.
  </div>
`;
