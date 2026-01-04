/**
 * PHASE 10: Accessibility Validation Tests
 * Checks HTML structure for WCAG 2.1 AA compliance
 */

const fs = require('fs');
const path = require('path');

console.log('='.repeat(80));
console.log('PHASE 10: ACCESSIBILITY VALIDATION');
console.log('='.repeat(80));
console.log('');

// Files to test
const filesToTest = [
  'out/debt-calculators/index.html',
  'out/debt-relief-calculator/index.html',
  'out/debt-relief-calculator/california/index.html',
  'out/debt-relief-calculator/texas/index.html',
  'out/debt-relief-calculator/florida/index.html'
];

let totalIssues = 0;
let criticalIssues = 0;

filesToTest.forEach(filePath => {
  console.log(`Testing: ${filePath}`);
  console.log('-'.repeat(80));
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  File not found: ${filePath}`);
    console.log('');
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf-8');
  const issues = [];
  
  // Test 1: HTML lang attribute
  if (!html.match(/<html[^>]+lang=/i)) {
    issues.push({
      severity: 'CRITICAL',
      wcag: '3.1.1',
      issue: 'Missing lang attribute on <html> tag',
      fix: 'Add lang="en" to <html> tag'
    });
    criticalIssues++;
  }
  
  // Test 2: Page title
  if (!html.match(/<title>([^<]+)<\/title>/i)) {
    issues.push({
      severity: 'CRITICAL',
      wcag: '2.4.2',
      issue: 'Missing or empty <title> tag',
      fix: 'Add descriptive page title'
    });
    criticalIssues++;
  }
  
  // Test 3: Check for images without alt text
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  imgTags.forEach(img => {
    if (!img.match(/alt=/i)) {
      issues.push({
        severity: 'CRITICAL',
        wcag: '1.1.1',
        issue: 'Image without alt attribute',
        fix: 'Add alt="" for decorative images or descriptive alt text',
        context: img.substring(0, 100)
      });
      criticalIssues++;
    }
  });
  
  // Test 4: Form inputs without labels
  const inputTags = html.match(/<input[^>]*>/gi) || [];
  inputTags.forEach(input => {
    // Check if input has aria-label or is associated with label
    const hasAriaLabel = input.match(/aria-label=/i);
    const hasId = input.match(/id="([^"]+)"/i);
    
    if (!hasAriaLabel && hasId) {
      const inputId = hasId[1];
      const labelPattern = new RegExp(`<label[^>]+for="${inputId}"`, 'i');
      if (!html.match(labelPattern)) {
        issues.push({
          severity: 'CRITICAL',
          wcag: '3.3.2',
          issue: `Input without associated label: id="${inputId}"`,
          fix: 'Add <label for="..."> or aria-label attribute',
          context: input.substring(0, 100)
        });
        criticalIssues++;
      }
    } else if (!hasAriaLabel && !hasId) {
      issues.push({
        severity: 'HIGH',
        wcag: '3.3.2',
        issue: 'Input without id or aria-label',
        fix: 'Add id and associated label, or aria-label'
      });
    }
  });
  
  // Test 5: Buttons without accessible text
  const buttonTags = html.match(/<button[^>]*>.*?<\/button>/gis) || [];
  buttonTags.forEach(button => {
    const buttonText = button.replace(/<[^>]*>/g, '').trim();
    const hasAriaLabel = button.match(/aria-label=/i);
    
    if (!buttonText && !hasAriaLabel) {
      issues.push({
        severity: 'CRITICAL',
        wcag: '4.1.2',
        issue: 'Button without accessible text',
        fix: 'Add text content or aria-label to button',
        context: button.substring(0, 100)
      });
      criticalIssues++;
    }
  });
  
  // Test 6: Check for proper heading hierarchy
  const headings = [];
  for (let i = 1; i <= 6; i++) {
    const pattern = new RegExp(`<h${i}[^>]*>`, 'gi');
    const matches = html.match(pattern) || [];
    matches.forEach(() => headings.push(i));
  }
  
  // Check for skipped levels
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] - headings[i-1] > 1) {
      issues.push({
        severity: 'HIGH',
        wcag: '1.3.1',
        issue: `Heading hierarchy skipped from H${headings[i-1]} to H${headings[i]}`,
        fix: 'Use sequential heading levels (H1 → H2 → H3, etc.)'
      });
    }
  }
  
  // Test 7: Check for multiple H1 tags
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
  if (h1Count > 1) {
    issues.push({
      severity: 'MEDIUM',
      wcag: '1.3.1',
      issue: `Multiple H1 tags found (${h1Count})`,
      fix: 'Use only one H1 per page'
    });
  } else if (h1Count === 0) {
    issues.push({
      severity: 'HIGH',
      wcag: '1.3.1',
      issue: 'No H1 tag found',
      fix: 'Add H1 tag for page title'
    });
  }
  
  // Test 8: Links without accessible text
  const linkTags = html.match(/<a[^>]*>.*?<\/a>/gis) || [];
  linkTags.forEach(link => {
    const linkText = link.replace(/<[^>]*>/g, '').trim();
    const hasAriaLabel = link.match(/aria-label=/i);
    
    if (!linkText && !hasAriaLabel) {
      issues.push({
        severity: 'CRITICAL',
        wcag: '2.4.4',
        issue: 'Link without accessible text',
        fix: 'Add text content or aria-label to link',
        context: link.substring(0, 100)
      });
      criticalIssues++;
    }
    
    // Check for generic link text
    if (linkText.toLowerCase().match(/^(click here|read more|learn more|here)$/)) {
      issues.push({
        severity: 'MEDIUM',
        wcag: '2.4.4',
        issue: `Generic link text: "${linkText}"`,
        fix: 'Use descriptive link text that indicates destination'
      });
    }
  });
  
  // Test 9: Viewport meta tag
  if (!html.match(/<meta[^>]+name="viewport"/i)) {
    issues.push({
      severity: 'HIGH',
      wcag: '1.4.10',
      issue: 'Missing viewport meta tag',
      fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">'
    });
  }
  
  // Test 10: Check for tables without headers
  const tableTags = html.match(/<table[^>]*>.*?<\/table>/gis) || [];
  tableTags.forEach(table => {
    if (!table.match(/<th[^>]*>/i)) {
      issues.push({
        severity: 'HIGH',
        wcag: '1.3.1',
        issue: 'Data table without <th> header cells',
        fix: 'Add <th> elements for table headers'
      });
    }
  });
  
  // Print results
  if (issues.length === 0) {
    console.log('  ✅ No accessibility issues found');
  } else {
    issues.forEach(issue => {
      const icon = issue.severity === 'CRITICAL' ? '❌' : 
                   issue.severity === 'HIGH' ? '⚠️' : 'ℹ️';
      console.log(`  ${icon} [${issue.severity}] WCAG ${issue.wcag}: ${issue.issue}`);
      console.log(`     Fix: ${issue.fix}`);
      if (issue.context) {
        console.log(`     Context: ${issue.context.substring(0, 80)}...`);
      }
    });
    totalIssues += issues.length;
  }
  
  console.log('');
});

// Summary
console.log('='.repeat(80));
console.log('ACCESSIBILITY TEST SUMMARY');
console.log('='.repeat(80));
console.log(`Total Issues Found: ${totalIssues}`);
console.log(`Critical Issues: ${criticalIssues}`);
console.log('');

if (totalIssues === 0) {
  console.log('🎉 ALL ACCESSIBILITY CHECKS PASSED!');
  console.log('');
  console.log('Note: This is a basic automated check.');
  console.log('Manual testing with screen readers is still recommended.');
} else if (criticalIssues === 0) {
  console.log('✅ No critical accessibility issues found.');
  console.log('⚠️  Some minor issues should be addressed.');
} else {
  console.log('❌ CRITICAL accessibility issues found.');
  console.log('These must be fixed before launch.');
}

console.log('');
console.log('Next Steps:');
console.log('1. Fix all CRITICAL issues');
console.log('2. Address HIGH priority issues');
console.log('3. Test with screen readers (NVDA, VoiceOver)');
console.log('4. Test keyboard navigation');
console.log('5. Run automated tools (WAVE, axe DevTools)');
console.log('='.repeat(80));

process.exit(criticalIssues > 0 ? 1 : 0);
