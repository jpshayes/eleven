module.exports = {
  content: [
    "./templates/**/*.html.twig", // Adjust paths to your Drupal templates
    "./src/**/*.{js,css}", // Adjust paths to your source files
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.step-5"),
              fontWeight: "700",
            },
            h2: {
              fontSize: theme("fontSize.step-4"),
              fontWeight: "600",
            },
            h3: {
              fontSize: theme("fontSize.step-3"),
              fontWeight: "600",
            },
            h4: {
              fontSize: theme("fontSize.step-2"),
              fontWeight: "600",
            },
            h5: {
              fontSize: theme("fontSize.step-1"),
              fontWeight: "600",
            },
          }, // Add this closing brace
        },
      }), // Add this closing parenthesis
      colors: {
        offwhite: "#F2F4F8", // Off-white
        joenavy: "#0a2458", // Joe Navy
        amtrakgrey: "#E0E5EF", // Amtrak Grey
        truered: "#ff343e", // True Red
        climategreen: "#27a27a", // Climate Green
        delawarebayblue: "#113e88", // Delaware Bay Blue
        unionblue: "#2755a2", // Union Blue
        customblue: "#819ece", // Custom Blue
      },
      fontSize: {
        // Renamed font sizes to step-* using Utopia variables
        "step--2": "var(--step--2)",
        "step--1": "var(--step--1)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
        "step-5": "var(--step-5)",
      },
      spacing: {
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        s: "var(--space-s)",
        m: "var(--space-m)",
        l: "var(--space-l)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },
      maxWidth: {
        grid: "var(--grid-max-width)",
      },
      gap: {
        grid: "var(--grid-gutter)",
      },
    },
  },
  plugins: [],
};
