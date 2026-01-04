/**
 * PHASE 10: Legal Compliance Validation
 * Checks for FTC/FCC compliance requirements
 */

const fs = require('fs');

console.log('='.repeat(80));
console.log('PHASE 10: LEGAL COMPLIANCE VALIDATION');
console.log('='.repeat(80));
console.log('');

const filesToTest = [
  'out/debt-calculators/index.html',
  'out/debt-relief-calculator/index.html',
  'out/debt-relief-calculator/california/index.html',
  'out/debt-relief-calculator/texas/index.html',
  'out/debt-relief-calculator/florida/index.html'
];

let totalViolations = 0;
let criticalViolations = 0;

// Prohibited language patterns
const prohibitedPhrases = [
  { pattern: /guaranteed?\s+(savings?|reduction|elimination)/gi, severity: 'CRITICAL', rule: 'FTC - No guarantees' },
  { pattern: /eliminate\s+your\s+debt/gi, severity: 'CRITICAL', rule: 'FTC - Misleading claims' },
  { pattern: /wipe\s+out\s+(your\s+)?debt/gi, severity: 'CRITICAL', rule: 'FTC - Misleading claims' },
  { pattern: /we\s+will\s+reduce/gi, severity: 'CRITICAL', rule: 'FTC - Absolute promises' },
  { pattern: /instant\s+relief/gi, severity: 'HIGH', rule: 'FTC - Unrealistic promises' },
  { pattern: /quick\s+fix/gi, severity: 'HIGH', rule: 'FTC - Unrealistic promises' },
  { pattern: /no\s+risk/gi, severity: 'HIGH', rule: 'FTC - False safety claims' },
  { pattern: /foolproof/gi, severity: 'HIGH', rule: 'FTC - Absolute claims' },
  { pattern: /success\s+guaranteed/gi, severity: 'CRITICAL', rule: 'FTC - Guarantee prohibition' }
];

// Required language patterns
const requiredPhrases = [
  { pattern: /(estimate|potential|may|could)/gi, name: 'Modeled language' },
  { pattern: /results?\s+(vary|may vary|differ)/gi, name: 'Results vary disclaimer' },
  { pattern: /(typically|generally|usually)/gi, name: 'Qualified statements' }
];

// Required disclosures
const requiredDisclosures = [
  { pattern: /fee|fees/gi, name: 'Fee disclosure' },
  { pattern: /20.{0,5}25/g, name: 'Fee percentage (20-25%)' },
  { pattern: /not\s+(financial\s+advice|a\s+law\s+firm|credit\s+counseling)/gi, name: 'Service type disclaimer' }
];

filesToTest.forEach(filePath => {
  console.log(`Testing: ${filePath}`);
  console.log('-'.repeat(80));
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  File not found: ${filePath}`);
    console.log('');
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf-8');
  const violations = [];
  const warnings = [];
  const passes = [];
  
  // Check for prohibited language
  prohibitedPhrases.forEach(({ pattern, severity, rule }) => {
    const matches = html.match(pattern);
    if (matches) {
      violations.push({
        severity,
        rule,
        issue: `Prohibited phrase found: "${matches[0]}"`,
        count: matches.length
      });
      if (severity === 'CRITICAL') criticalViolations++;
      totalViolations++;
    }
  });
  
  // Check for required language
  requiredPhrases.forEach(({ pattern, name }) => {
    const matches = html.match(pattern);
    if (matches && matches.length > 0) {
      passes.push({ check: name, status: 'Found', count: matches.length });
    } else {
      warnings.push({ check: name, issue: 'Not found - should use modeled language' });
    }
  });
  
  // Check for required disclosures
  requiredDisclosures.forEach(({ pattern, name }) => {
    const matches = html.match(pattern);
    if (matches && matches.length > 0) {
      passes.push({ check: name, status: 'Present' });
    } else {
      violations.push({
        severity: 'HIGH',
        rule: 'FTC Disclosure Requirements',
        issue: `Missing required disclosure: ${name}`
      });
      totalViolations++;
    }
  });
  
  // Check Quebec exclusion
  if (html.match(/quebec/gi) && !html.match(/excluded|excluding|not available/gi)) {
    violations.push({
      severity: 'CRITICAL',
      rule: 'Regional Compliance',
      issue: 'Quebec may not be properly excluded'
    });
    criticalViolations++;
    totalViolations++;
  }
  
  // Check for pre-checked consent boxes (FCC violation)
  if (html.match(/checked\s*=\s*["\']?(checked|true)/gi)) {
    const context = html.match(/.{0,50}checked\s*=\s*["\']?(checked|true).{0,50}/gi);
    if (context && context.some(c => c.match(/consent|agree|opt/gi))) {
      violations.push({
        severity: 'CRITICAL',
        rule: 'FCC - Express Written Consent',
        issue: 'Pre-checked consent checkbox detected (FCC violation)'
      });
      criticalViolations++;
      totalViolations++;
    }
  }
  
  // Check for consent language specificity (FCC)
  if (html.match(/consent|opt.?in/gi)) {
    const hasOneCall = html.match(/one\s+call/gi);
    const hasOnePartner = html.match(/one\s+partner/gi);
    const hasPhone = html.match(/phone/gi);
    
    if (!hasOneCall || !hasOnePartner) {
      violations.push({
        severity: 'HIGH',
        rule: 'FCC - Consent Specificity',
        issue: 'Consent language should specify "one call" and "one partner"'
      });
      totalViolations++;
    }
  }
  
  // Print results
  if (violations.length === 0 && warnings.length === 0) {
    console.log('  ✅ No compliance violations found');
  } else {
    if (violations.length > 0) {
      console.log('  VIOLATIONS:');
      violations.forEach(v => {
        const icon = v.severity === 'CRITICAL' ? '❌' : '⚠️';
        console.log(`    ${icon} [${v.severity}] ${v.rule}`);
        console.log(`       ${v.issue}`);
        if (v.count) console.log(`       Occurrences: ${v.count}`);
      });
    }
    
    if (warnings.length > 0) {
      console.log('  WARNINGS:');
      warnings.forEach(w => {
        console.log(`    ⚠️  ${w.check}: ${w.issue}`);
      });
    }
  }
  
  if (passes.length > 0) {
    console.log('  PASSED CHECKS:');
    passes.forEach(p => {
      console.log(`    ✅ ${p.check}: ${p.status}${p.count ? ` (${p.count})` : ''}`);
    });
  }
  
  console.log('');
});

// Check data files for Quebec
console.log('Checking Data Files for Quebec Exclusion...');
console.log('-'.repeat(80));

const dataFiles = [
  'src/data/all-locations.js',
  'src/data/canadian-provinces-data.js'
];

let quebecFound = false;

dataFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (content.match(/quebec/gi)) {
      console.log(`  ❌ Quebec found in: ${filePath}`);
      quebecFound = true;
      criticalViolations++;
      totalViolations++;
    } else {
      console.log(`  ✅ Quebec properly excluded from: ${filePath}`);
    }
  }
});

if (!quebecFound) {
  console.log('  ✅ Quebec properly excluded from all data files');
}

console.log('');

// Summary
console.log('='.repeat(80));
console.log('COMPLIANCE TEST SUMMARY');
console.log('='.repeat(80));
console.log(`Total Violations: ${totalViolations}`);
console.log(`Critical Violations: ${criticalViolations}`);
console.log('');

if (totalViolations === 0) {
  console.log('🎉 ALL COMPLIANCE CHECKS PASSED!');
  console.log('');
  console.log('✅ No prohibited language found');
  console.log('✅ Required disclosures present');
  console.log('✅ Quebec properly excluded');
  console.log('✅ FCC consent requirements met');
} else if (criticalViolations === 0) {
  console.log('✅ No critical compliance violations.');
  console.log('⚠️  Some minor issues should be reviewed.');
} else {
  console.log('❌ CRITICAL compliance violations found.');
  console.log('These MUST be fixed before launch to avoid regulatory action.');
}

console.log('');
console.log('Compliance Areas Checked:');
console.log('- FTC Truth in Advertising');
console.log('- FTC Deceptive Practices');
console.log('- FCC Telemarketing Rules');
console.log('- Quebec Regulatory Exclusion');
console.log('- Fee Disclosure Requirements');
console.log('='.repeat(80));

process.exit(criticalViolations > 0 ? 1 : 0);
