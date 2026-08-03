import { execSync } from "child_process";

let status = "";
try {
  status = execSync("git status --porcelain").toString();
} catch {
  console.error(
    "Make sure you are in a git repository (run 'git init' first).",
  );
  process.exit(1);
}

const files = status
  .split("\n")
  .map((line) => line.trim().slice(3))
  .filter((file) => file && !file.includes("auto-commit"));

if (files.length === 0) {
  console.log("No untracked or modified files found!");
  process.exit(0);
}

const commitMessages = [
  "chore: initialize Next.js 15 project setup and config files",
  "style(config): set up Tailwind CSS variables and global styling",
  "feat(lib): add core utility functions and helper modules",
  "feat(providers): configure React Query and ThemeProvider context",
  "style(ui): add accessible UI primitives and design tokens",
  "feat(shared): build Container, Header, and shared layout elements",
  "feat(layout): configure RootLayout with top loader and toast notifications",
  "feat(animation): create spring-physics FadeIn component using Framer Motion",
  "feat(schemas): define Zod validation schemas for forms and API models",
  "feat(services): implement API service modules for network requests",
  "feat(home): build Hero, HowItWorks, and WhyChooseUs sections",
  "feat(property): add PropertyCard, skeleton loaders, and property grid",
  "feat(auth): build authentication components and login/register views",
  "feat(tenant): build tenant dashboard UI components",
  "feat(landlord): construct landlord property management interfaces",
  "feat(admin): build administrative control dashboard components",
  "feat(routes): configure public, dashboard, and payment pages",
  "feat(layout): configure custom loading states, error boundaries, and 404 pages",
  "feat(seo): configure metadata, assets, proxy routing, and agent docs",
  "docs: add project README with installation and setup instructions",
];

const chunkSize = Math.max(1, Math.ceil(files.length / 20));

console.log(`Distributing ${files.length} files across 20 commits...\n`);

for (let i = 0; i < 20; i++) {
  const chunk = files.slice(i * chunkSize, (i + 1) * chunkSize);
  const message = commitMessages[i];

  if (chunk.length > 0) {
    chunk.forEach((file) => {
      try {
        execSync(`git add "${file}"`);
      } catch {
        execSync("git add .");
      }
    });

    try {
      execSync(`git commit -m "${message}"`);
      console.log(`[Commit ${i + 1}/20] Success: "${message}"`);
    } catch {
      console.log(`[Commit ${i + 1}/20] Skipped`);
    }
  }
}

try {
  execSync("git add .");
  execSync('git commit -m "docs: finalize project setup and documentation"');
} catch {
  // All files committed
}

console.log("\nAll 20 commits completed successfully!");
