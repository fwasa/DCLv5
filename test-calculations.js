/**
 * PHASE 10: Automated Calculation Validation Tests
 * Tests the debt relief calculator logic directly
 */

// Mock calculator functions based on the logic in DebtCalculator.jsx
function calculateDebtRelief(inputs) {
  const {
    debtAmount,
    paymentStatus,
    employment,
    monthlyIncome,
    monthlyExpenses,
    hardships = [],
    state
  } = inputs;

  // Calculate disposable income
  const disposableIncome = monthlyIncome - monthlyExpenses;

  // Base settlement percentage (40-60% range)
  let settlementPercentage = 0.50; // Start at 50%

  // Adjust based on payment status
  if (paymentStatus === 'current') {
    settlementPercentage = 0.52; // Slightly better for current
  } else if (paymentStatus === 'behind-1') {
    settlementPercentage = 0.48;
  } else if (paymentStatus === 'behind-2-3') {
    settlementPercentage = 0.45;
  } else if (paymentStatus === 'behind-4-plus') {
    settlementPercentage = 0.40; // Much lower for very behind
  }

  // Calculate settlement amount
  const settlementAmount = debtAmount * settlementPercentage;
  
  // Calculate fees (22.5% average)
  const feePercentage = 0.225;
  const fees = settlementAmount * feePercentage;
  
  // Total relief path cost
  const reliefPathTotal = settlementAmount + fees;

  // Calculate current path (debt + interest)
  // Assuming average 18% APR, minimum payments over 5-7 years
  const avgInterestRate = 0.18;
  const avgYears = 6;
  const currentPathTotal = debtAmount * (1 + (avgInterestRate * avgYears));

  // Calculate savings
  const totalSavings = currentPathTotal - reliefPathTotal;

  // Calculate timeline (months)
  let timelineMonths = 36; // Default 36 months
  
  // Adjust based on disposable income
  if (disposableIncome > 0) {
    const monthlyPayment = Math.min(
      disposableIncome * 0.5, // Use up to 50% of disposable
      reliefPathTotal / 24 // Don't make it shorter than 24 months
    );
    
    if (monthlyPayment > 0) {
      timelineMonths = Math.ceil(reliefPathTotal / monthlyPayment);
      timelineMonths = Math.max(24, Math.min(48, timelineMonths)); // Clamp 24-48
    }
  }

  // Calculate confidence score (0-100)
  let confidenceScore = 75; // Base score

  // Adjust for payment status
  if (paymentStatus === 'current') confidenceScore += 5;
  else if (paymentStatus === 'behind-1') confidenceScore -= 5;
  else if (paymentStatus === 'behind-2-3') confidenceScore -= 10;
  else if (paymentStatus === 'behind-4-plus') confidenceScore -= 15;

  // Adjust for employment
  if (employment === 'full-time') confidenceScore += 5;
  else if (employment === 'part-time') confidenceScore -= 5;
  else if (employment === 'self-employed') confidenceScore -= 3;
  else if (employment === 'unemployed') confidenceScore -= 20;

  // Adjust for disposable income ratio
  const incomeRatio = disposableIncome / monthlyIncome;
  if (incomeRatio > 0.30) confidenceScore += 5;
  else if (incomeRatio < 0.10) confidenceScore -= 10;

  // Adjust for hardships
  confidenceScore -= (hardships.length * 3);

  // Clamp confidence score
  confidenceScore = Math.max(40, Math.min(90, confidenceScore));

  // Calculate monthly payment
  const monthlyPayment = reliefPathTotal / timelineMonths;

  return {
    debtAmount,
    currentPathTotal: Math.round(currentPathTotal),
    settlementAmount: Math.round(settlementAmount),
    fees: Math.round(fees),
    reliefPathTotal: Math.round(reliefPathTotal),
    totalSavings: Math.round(totalSavings),
    timelineMonths,
    monthlyPayment: Math.round(monthlyPayment),
    confidenceScore: Math.round(confidenceScore),
    settlementPercentage: Math.round(settlementPercentage * 100),
    disposableIncome
  };
}

// Test scenarios
const testScenarios = [
  {
    name: "Scenario 1: Minimum Debt Amount",
    inputs: {
      debtAmount: 5000,
      paymentStatus: 'current',
      employment: 'full-time',
      monthlyIncome: 3000,
      monthlyExpenses: 2400,
      hardships: [],
      state: 'california'
    },
    expectations: {
      settlementPercentageRange: [50, 55],
      confidenceScoreRange: [75, 85],
      timelineRange: [24, 36]
    }
  },
  {
    name: "Scenario 2: Mid-Range Debt",
    inputs: {
      debtAmount: 25000,
      paymentStatus: 'current',
      employment: 'full-time',
      monthlyIncome: 5000,
      monthlyExpenses: 3800,
      hardships: [],
      state: 'texas'
    },
    expectations: {
      settlementPercentageRange: [50, 55],
      confidenceScoreRange: [75, 85],
      timelineRange: [24, 36]
    }
  },
  {
    name: "Scenario 3: High Debt, Behind on Payments",
    inputs: {
      debtAmount: 75000,
      paymentStatus: 'behind-2-3',
      employment: 'full-time',
      monthlyIncome: 7500,
      monthlyExpenses: 5000,
      hardships: ['medical'],
      state: 'florida'
    },
    expectations: {
      settlementPercentageRange: [42, 48],
      confidenceScoreRange: [60, 70],
      timelineRange: [24, 36]
    }
  },
  {
    name: "Scenario 4: Maximum Debt, Very Behind",
    inputs: {
      debtAmount: 150000,
      paymentStatus: 'behind-4-plus',
      employment: 'full-time',
      monthlyIncome: 12000,
      monthlyExpenses: 7500,
      hardships: ['job-loss', 'divorce'],
      state: 'new-york'
    },
    expectations: {
      settlementPercentageRange: [38, 42],
      confidenceScoreRange: [50, 60],
      timelineRange: [24, 36]
    }
  },
  {
    name: "Scenario 5: Part-Time Employment",
    inputs: {
      debtAmount: 30000,
      paymentStatus: 'current',
      employment: 'part-time',
      monthlyIncome: 3000,
      monthlyExpenses: 2500,
      hardships: ['reduced-income'],
      state: 'ohio'
    },
    expectations: {
      settlementPercentageRange: [50, 55],
      confidenceScoreRange: [62, 70],
      timelineRange: [30, 48]
    }
  },
  {
    name: "Scenario 6: Self-Employed, Behind",
    inputs: {
      debtAmount: 35000,
      paymentStatus: 'behind-2-3',
      employment: 'self-employed',
      monthlyIncome: 5500,
      monthlyExpenses: 4000,
      hardships: ['business-downturn'],
      state: 'georgia'
    },
    expectations: {
      settlementPercentageRange: [42, 48],
      confidenceScoreRange: [58, 66],
      timelineRange: [24, 36]
    }
  },
  {
    name: "Scenario 7: High Disposable Income",
    inputs: {
      debtAmount: 40000,
      paymentStatus: 'current',
      employment: 'full-time',
      monthlyIncome: 8000,
      monthlyExpenses: 4000,
      hardships: [],
      state: 'california'
    },
    expectations: {
      settlementPercentageRange: [50, 55],
      confidenceScoreRange: [80, 90],
      timelineRange: [24, 30]
    }
  },
  {
    name: "Scenario 8: Low Disposable Income",
    inputs: {
      debtAmount: 40000,
      paymentStatus: 'current',
      employment: 'full-time',
      monthlyIncome: 3500,
      monthlyExpenses: 3000,
      hardships: [],
      state: 'ohio'
    },
    expectations: {
      settlementPercentageRange: [50, 55],
      confidenceScoreRange: [65, 75],
      timelineRange: [36, 48]
    }
  },
  {
    name: "Scenario 9: Multiple Hardships",
    inputs: {
      debtAmount: 25000,
      paymentStatus: 'behind-4-plus',
      employment: 'full-time',
      monthlyIncome: 5000,
      monthlyExpenses: 3800,
      hardships: ['job-loss', 'medical', 'divorce'],
      state: 'texas'
    },
    expectations: {
      settlementPercentageRange: [38, 42],
      confidenceScoreRange: [50, 60],
      timelineRange: [24, 36]
    }
  },
  {
    name: "Scenario 10: Optimal Profile",
    inputs: {
      debtAmount: 50000,
      paymentStatus: 'current',
      employment: 'full-time',
      monthlyIncome: 7000,
      monthlyExpenses: 4500,
      hardships: [],
      state: 'california'
    },
    expectations: {
      settlementPercentageRange: [50, 55],
      confidenceScoreRange: [80, 90],
      timelineRange: [24, 36]
    }
  }
];

// Run tests
console.log('='.repeat(80));
console.log('PHASE 10: CALCULATION VALIDATION TEST RESULTS');
console.log('='.repeat(80));
console.log('');

let passedTests = 0;
let failedTests = 0;
const failures = [];

testScenarios.forEach((scenario, index) => {
  console.log(`Test ${index + 1}: ${scenario.name}`);
  console.log('-'.repeat(80));
  
  const result = calculateDebtRelief(scenario.inputs);
  
  // Validate results
  const checks = [];
  
  // Check settlement percentage
  const settlementInRange = 
    result.settlementPercentage >= scenario.expectations.settlementPercentageRange[0] &&
    result.settlementPercentage <= scenario.expectations.settlementPercentageRange[1];
  checks.push({
    name: 'Settlement %',
    pass: settlementInRange,
    expected: scenario.expectations.settlementPercentageRange,
    actual: result.settlementPercentage
  });
  
  // Check confidence score
  const confidenceInRange = 
    result.confidenceScore >= scenario.expectations.confidenceScoreRange[0] &&
    result.confidenceScore <= scenario.expectations.confidenceScoreRange[1];
  checks.push({
    name: 'Confidence Score',
    pass: confidenceInRange,
    expected: scenario.expectations.confidenceScoreRange,
    actual: result.confidenceScore
  });
  
  // Check timeline
  const timelineInRange = 
    result.timelineMonths >= scenario.expectations.timelineRange[0] &&
    result.timelineMonths <= scenario.expectations.timelineRange[1];
  checks.push({
    name: 'Timeline (months)',
    pass: timelineInRange,
    expected: scenario.expectations.timelineRange,
    actual: result.timelineMonths
  });
  
  // Check monthly payment within disposable income
  const monthlyPaymentOK = result.monthlyPayment <= result.disposableIncome;
  checks.push({
    name: 'Monthly Payment ≤ Disposable',
    pass: monthlyPaymentOK,
    expected: `≤ ${result.disposableIncome}`,
    actual: result.monthlyPayment
  });
  
  // Check savings are positive
  const savingsPositive = result.totalSavings > 0;
  checks.push({
    name: 'Positive Savings',
    pass: savingsPositive,
    expected: '> 0',
    actual: result.totalSavings
  });
  
  // Print results
  console.log(`  Debt Amount: $${result.debtAmount.toLocaleString()}`);
  console.log(`  Current Path: $${result.currentPathTotal.toLocaleString()}`);
  console.log(`  Relief Path: $${result.reliefPathTotal.toLocaleString()}`);
  console.log(`  Savings: $${result.totalSavings.toLocaleString()}`);
  console.log(`  Settlement %: ${result.settlementPercentage}%`);
  console.log(`  Confidence: ${result.confidenceScore}/100`);
  console.log(`  Timeline: ${result.timelineMonths} months`);
  console.log(`  Monthly Payment: $${result.monthlyPayment.toLocaleString()}`);
  console.log(`  Disposable Income: $${result.disposableIncome.toLocaleString()}`);
  console.log('');
  
  // Check results
  const allPassed = checks.every(check => check.pass);
  
  if (allPassed) {
    console.log('  ✅ PASS - All validations passed');
    passedTests++;
  } else {
    console.log('  ❌ FAIL - Validation failures:');
    checks.forEach(check => {
      if (!check.pass) {
        console.log(`    - ${check.name}: Expected ${check.expected}, Got ${check.actual}`);
      }
    });
    failedTests++;
    failures.push({ scenario: scenario.name, checks });
  }
  
  console.log('');
});

// Summary
console.log('='.repeat(80));
console.log('TEST SUMMARY');
console.log('='.repeat(80));
console.log(`Total Tests: ${testScenarios.length}`);
console.log(`Passed: ${passedTests} ✅`);
console.log(`Failed: ${failedTests} ❌`);
console.log(`Success Rate: ${Math.round((passedTests / testScenarios.length) * 100)}%`);
console.log('');

if (failedTests === 0) {
  console.log('🎉 ALL TESTS PASSED! Calculator logic validated.');
} else {
  console.log('⚠️  SOME TESTS FAILED. Review failures above.');
  console.log('');
  console.log('Failed Scenarios:');
  failures.forEach(f => {
    console.log(`  - ${f.scenario}`);
  });
}

console.log('='.repeat(80));

// Exit with appropriate code
process.exit(failedTests > 0 ? 1 : 0);
