/**
 * All Locations - Unified Export
 * DebtCalculatorLab - Phase 6 Complete
 * 
 * Combines all US states and Canadian provinces
 * Total: 59 geographic locations with 246 unique FAQs
 */

import { big10States } from './big10-states-data';
import { remaining40StatesPart1 } from './remaining40-states-part1';
import { remaining40StatesPart2 } from './remaining40-states-part2';
import { canadianProvinces } from './canadian-provinces-data';

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

/**
 * All US States (50 total)
 * Combines Big 10 + Part 1 + Part 2
 */
export const allUSStates = {
  ...big10States,
  ...remaining40StatesPart1,
  ...remaining40StatesPart2
};

/**
 * All Canadian Provinces (9 total, excluding Quebec)
 */
export const allCanadianProvinces = canadianProvinces;

/**
 * All Locations - US + Canada (59 total)
 */
export const allLocations = {
  ...allUSStates,
  ...allCanadianProvinces
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get location by slug
 * @param {string} slug - Location slug (e.g., 'california', 'ontario')
 * @returns {Object|null} Location data or null if not found
 */
export const getLocationBySlug = (slug) => {
  return allLocations[slug] || null;
};

/**
 * Get all location slugs
 * @returns {string[]} Array of all location slugs
 */
export const getAllLocationSlugs = () => {
  return Object.keys(allLocations).sort();
};

/**
 * Get US state slugs only
 * @returns {string[]} Array of US state slugs
 */
export const getUSStateSlugs = () => {
  return Object.keys(allUSStates).sort();
};

/**
 * Get Canadian province slugs only
 * @returns {string[]} Array of Canadian province slugs
 */
export const getCanadianProvinceSlugs = () => {
  return Object.keys(allCanadianProvinces).sort();
};

/**
 * Get location count
 * @returns {Object} Count of locations by type
 */
export const getLocationCount = () => {
  return {
    usStates: Object.keys(allUSStates).length,
    canadianProvinces: Object.keys(allCanadianProvinces).length,
    total: Object.keys(allLocations).length
  };
};

/**
 * Check if location exists
 * @param {string} slug - Location slug to check
 * @returns {boolean} True if location exists
 */
export const locationExists = (slug) => {
  return slug in allLocations;
};

/**
 * Get location by country
 * @param {string} country - 'USA' or 'Canada'
 * @returns {Object} Locations for specified country
 */
export const getLocationsByCountry = (country) => {
  if (country === 'USA') return allUSStates;
  if (country === 'Canada') return allCanadianProvinces;
  return {};
};

/**
 * Search locations by name
 * @param {string} searchTerm - Search term
 * @returns {Object[]} Array of matching locations
 */
export const searchLocations = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return Object.values(allLocations).filter(location => 
    location.stateName.toLowerCase().includes(term)
  );
};

// ============================================================================
// STATISTICS
// ============================================================================

/**
 * Get complete statistics
 * @returns {Object} Comprehensive statistics
 */
export const getStatistics = () => {
  const usStates = Object.values(allUSStates);
  const canadianProvs = Object.values(allCanadianProvinces);
  const allLocs = [...usStates, ...canadianProvs];

  // Count FAQs
  const usFAQCount = usStates.reduce((sum, state) => sum + state.faqs.length, 0);
  const canadaFAQCount = canadianProvs.reduce((sum, prov) => sum + prov.faqs.length, 0);

  // Count words (approximate)
  const countWords = (text) => text.split(/\s+/).length;
  const usWords = usStates.reduce((sum, state) => {
    const faqWords = state.faqs.reduce((faqSum, faq) => 
      faqSum + countWords(faq.answer), 0);
    return sum + faqWords + countWords(state.introText);
  }, 0);
  const canadaWords = canadianProvs.reduce((sum, prov) => {
    const faqWords = prov.faqs.reduce((faqSum, faq) => 
      faqSum + countWords(faq.answer), 0);
    return sum + faqWords + countWords(prov.introText);
  }, 0);

  return {
    locations: {
      usStates: usStates.length,
      canadianProvinces: canadianProvs.length,
      total: allLocs.length
    },
    faqs: {
      us: usFAQCount,
      canada: canadaFAQCount,
      total: usFAQCount + canadaFAQCount
    },
    words: {
      us: usWords,
      canada: canadaWords,
      total: usWords + canadaWords
    }
  };
};

// ============================================================================
// EXPORTS - Individual Access
// ============================================================================

// Export everything for direct access
export * from './big10-states-data';
export * from './remaining40-states-part1';
export * from './remaining40-states-part2';
export * from './canadian-provinces-data';

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default {
  allUSStates,
  allCanadianProvinces,
  allLocations,
  getLocationBySlug,
  getAllLocationSlugs,
  getUSStateSlugs,
  getCanadianProvinceSlugs,
  getLocationCount,
  locationExists,
  getLocationsByCountry,
  searchLocations,
  getStatistics
};

/**
 * USAGE EXAMPLES:
 * 
 * // Get all locations
 * import { allLocations } from './all-locations';
 * 
 * // Get specific location
 * import { getLocationBySlug } from './all-locations';
 * const california = getLocationBySlug('california');
 * 
 * // Get all US state slugs
 * import { getUSStateSlugs } from './all-locations';
 * const stateSlugs = getUSStateSlugs();
 * 
 * // Get statistics
 * import { getStatistics } from './all-locations';
 * const stats = getStatistics();
 * console.log(`Total locations: ${stats.locations.total}`);
 * console.log(`Total FAQs: ${stats.faqs.total}`);
 * 
 * // Direct import specific state
 * import { california, texas } from './all-locations';
 * 
 * // Check if location exists
 * import { locationExists } from './all-locations';
 * if (locationExists('new-york')) { ... }
 */
