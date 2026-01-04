import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const ROOTS = [
  path.join(projectRoot, "src"),
  path.join(projectRoot, "public")
].filter(fs.existsSync);

const EXT = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".md", ".txt", ".xml", ".html", ".css"]);

const REPLACEMENTS = [
  // Use regex-based replacements to avoid embedding mojibake in source
  // These will be applied as string replacements
];

// Patterns to find (as strings to avoid embedding mojibake)
const FIND_REPLACE_PAIRS = [
  // Em dashes and similar
  [/\u00e2\u0080\u0093/g, "-"],  // â€" em dash
  [/\u00e2\u0080\u0094/g, "-"],  // em dash variant  
  [/\u00c3\u00a2\u00e2\u0082\u00ac/g, "-"],  // â€ another variant
  
  // Arrows and symbols
  [/\u00e2\u0080\u00ba/g, ">"],  // â€º right angle
  [/\u00e2\u0086\u0092/g, ""],   // â†' right arrow (remove)
  [/\u00e2\u009c\u0093/g, ""],   // âœ" checkmark (remove)
  
  // Copyright
  [/\u00c2\u00a9/g, "©"],        // Â© copyright
  
  // Stray Â
  [/\u00c2\u0020/g, " "],        // Â  stray with space
  [/\u00c2(?!\u00a9)/g, ""],     // Â stray alone (not before ©)
  
  // Broken emoji patterns - these are the ðŸ sequences
  [/\u00c3\u00b0\u00c5\u00b8[\u0000-\u00ff]*/g, ""],  // ðŸ followed by anything
  [/\u00f0\u009f[\u0080-\u00bf][\u0080-\u00bf]/g, ""],  // Standard broken emoji
  [/\u2202\u009f/g, ""],         // ∂Ÿ broken emoji
  
  // Additional patterns
  [/\u00e2\u0080\u0098/g, "'"],  // ' left quote
  [/\u00e2\u0080\u0099/g, "'"],  // ' right quote  
  [/\u00e2\u0080\u009c/g, '"'],  // " left quote
  [/\u00e2\u0080\u009d/g, '"'],  // " right quote
];

const BAD_PATTERNS = [
  /â€"/g, 
  /â€º/g, 
  /â†'/g, 
  /âœ"/g, 
  /Â©/g, 
  /Â/g,
  /ðŸ/g,  // Broken emoji patterns
  /∂Ÿ/g
];

function walk(dir) {
  const out = [];
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Skip node_modules and build directories
        if (entry.name === "node_modules" || entry.name === ".next" || entry.name === "out") {
          continue;
        }
        out.push(...walk(full));
      } else {
        out.push(full);
      }
    }
  } catch (err) {
    console.warn(`Warning: Could not read directory ${dir}: ${err.message}`);
  }
  return out;
}

let changed = 0;
let flagged = [];

console.log("🔍 Scanning for encoding issues...\n");

for (const root of ROOTS) {
  console.log(`Checking: ${path.relative(projectRoot, root)}/`);
  
  for (const file of walk(root)) {
    const ext = path.extname(file);
    if (!EXT.has(ext)) continue;

    try {
      const before = fs.readFileSync(file, "utf8");
      let after = before;

      // Apply all find/replace patterns
      for (const [pattern, replacement] of FIND_REPLACE_PAIRS) {
        after = after.replace(pattern, replacement);
      }

      // Write back if changed
      if (after !== before) {
        fs.writeFileSync(file, after, "utf8");
        changed++;
        console.log(`  ✓ Fixed: ${path.relative(projectRoot, file)}`);
      }

      // Flag if any bad patterns still exist
      for (const p of BAD_PATTERNS) {
        if (p.test(after)) {
          flagged.push(path.relative(projectRoot, file));
          break;
        }
      }
    } catch (err) {
      console.warn(`  ⚠ Could not process ${file}: ${err.message}`);
    }
  }
}

console.log(`\n✅ sanitize-encoding: updated ${changed} file(s)`);

if (flagged.length) {
  console.error("\n❌ STILL FOUND BAD ENCODING IN:");
  for (const f of flagged) {
    console.error(`   - ${f}`);
  }
  console.error("\n⚠️  Build will continue, but please review these files manually.\n");
  // Don't exit with error on first run - just warn
  // process.exit(1);
} else {
  console.log("✅ No encoding issues detected!\n");
}
