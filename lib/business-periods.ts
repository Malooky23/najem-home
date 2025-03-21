type BusinessPeriod = 'regular' | 'ramadan' | 'eid-al-fitr' | 'eid-al-adha' | 'new-year' | 'national-day' | 'commemoration-day' | 'hijri-new-year' | 'prophet-muhammads-birthday' | 'isra-and-miraj' | 'short-holiday';

interface PeriodConfig {
  name: BusinessPeriod;
  startDate: Date | null; // null means no specific start
  endDate: Date | null;   // null means no specific end
  active: boolean;        // manual override
}

// Configuration for special periods
const businessPeriods: PeriodConfig[]= [
  // Ramadan 2024 (March 10/11 to April 9/10)
  {
    name: 'ramadan',
    startDate: new Date('2024-03-10'),
    endDate: new Date('2024-04-10'),
    active: false
  },
  // Eid al-Fitr 2024 (April 10/11 to April 13/14)
  {
    name: 'eid-al-fitr',
    startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-14'),
    active: false
  },
  // Eid al-Adha 2024 (estimated June 16/17 to June 19/20)
  {
    name: 'eid-al-adha',
    startDate: new Date('2024-06-16'),
    endDate: new Date('2024-06-20'),
    active: false
  },
  // New Year 2025
  {
    name: 'new-year',
    startDate: new Date('2024-12-30'),
    endDate: new Date('2025-01-02'),
    active: false
  },
  // New Year 2026
  {
    name: 'new-year',
    startDate: new Date('2025-12-30'),
    endDate: new Date('2026-01-02'),
    active: false
  },
  // Ramadan 2025 (Likely around March 1st to March 30th)
  {
    name: 'ramadan',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-30'),
    active: false
  },
  // Eid al-Fitr 2025 (Likely around March 31st to April 2nd)
  {
    name: 'eid-al-fitr',
    startDate: new Date('2025-03-31'),
    endDate: new Date('2025-04-02'),
    active: false
  },
  // Eid al-Adha 2025 (Likely around June 9th to June 11th)
  {
    name: 'eid-al-adha',
    startDate: new Date('2025-06-09'),
    endDate: new Date('2025-06-11'),
    active: false
  },
  // Hijri New Year 2025 (Likely around July 7th)
  {
    name: 'hijri-new-year',
    startDate: new Date('2025-07-07'),
    endDate: new Date('2025-07-07'),
    active: false
  },
  // Prophet Muhammad's Birthday 2025 (Likely around September 15th)
  {
    name: 'prophet-muhammads-birthday',
    startDate: new Date('2025-09-15'),
    endDate: new Date('2025-09-15'),
    active: false
  },
  // Commemoration Day 2025 (November 30th)
  {
    name: 'commemoration-day',
    startDate: new Date('2025-11-30'),
    endDate: new Date('2025-11-30'),
    active: false
  },
  // National Day 2025 (December 2nd to December 3rd)
  {
    name: 'national-day',
    startDate: new Date('2025-12-02'),
    endDate: new Date('2025-12-03'),
    active: false
  },
  // Isra and Miraj 2025 (Likely around February 27th)
  {
    name: 'isra-and-miraj',
    startDate: new Date('2025-02-27'),
    endDate: new Date('2025-02-27'),
    active: false
  },
  // Short holiday config will be managed separately
];

// In-memory storage for short-holiday information
interface HolidayInfo {
  date: string;
  descriptionEn: string;
  descriptionAr: string;
  hoursEn: string;
  hoursAr: string;
}

// Default is empty
let shortHolidayInfo: HolidayInfo | null = null;

/**
 * Determines the current business period based on date or manual override
 */
export function getCurrentBusinessPeriod(): BusinessPeriod {
  // First check if there's an active short holiday
  if (shortHolidayInfo) {
    try {
      const holidayDate = new Date(shortHolidayInfo.date);
      const today = new Date();
      
      // Compare only the date parts
      if (holidayDate.toDateString() === today.toDateString()) {
        return 'short-holiday';
      }
    } catch (e) {
      console.error("Error parsing short holiday date:", e);
    }
  }

  // Check for manually activated periods
  const manuallyActive = businessPeriods.find(period => period.active);
  if (manuallyActive) return manuallyActive.name;

  // Then check date-based periods
  const today = new Date();
  for (const period of businessPeriods) {
    if (!period.startDate || !period.endDate) continue;
    
    if (today >= period.startDate && today <= period.endDate) {
      return period.name;
    }
  }

  // Default to regular business hours
  return 'regular';
}

/**
 * Get short holiday information for the given language
 */
export function getShortHolidayInfo(locale: string = 'en'): { hours: string, notice: string } | null {
  if (!shortHolidayInfo) return null;
  
  return {
    hours: locale === 'ar' ? shortHolidayInfo.hoursAr : shortHolidayInfo.hoursEn,
    notice: locale === 'ar' ? shortHolidayInfo.descriptionAr : shortHolidayInfo.descriptionEn
  };
}

/**
 * Updates a business period's active status
 */
export function setBusinessPeriodActive(name: BusinessPeriod, active: boolean): void {
  // Clear short holiday if activating a different period
  if (active && name !== 'short-holiday') {
    shortHolidayInfo = null;
  }

  // Find and update the requested period
  const period = businessPeriods.find(p => p.name === name);
  if (period) {
    period.active = active;

    // If activating one period, deactivate others
    if (active) {
      businessPeriods.forEach(p => {
        if (p.name !== name) p.active = false;
      });
    }
  }
}

/**
 * Add a single-day holiday closure with bilingual support
 */
export function addHolidayClosure(
  date: Date, 
  descriptionEn: string, 
  descriptionAr: string,
  hoursEn: string = "Office closed for the day",
  hoursAr: string = "المكتب مغلق لهذا اليوم"
): void {
  // Format date in both languages
  const formattedDateEn = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
  });
  
  const formattedDateAr = date.toLocaleDateString('ar-AE', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
  });
  
  // If no custom hours were provided, create default closed message with the date
  if (hoursEn === "Office closed for the day") {
    hoursEn = `${formattedDateEn}: Closed`;
  }
  
  if (hoursAr === "المكتب مغلق لهذا اليوم") {
    hoursAr = `${formattedDateAr}: مغلق`;
  }
  
  // Store the short holiday information in memory
  shortHolidayInfo = {
    date: date.toISOString(),
    descriptionEn,
    descriptionAr,
    hoursEn,
    hoursAr
  };
  
  // Deactivate all other periods and mark short-holiday as active
  businessPeriods.forEach(p => {
    p.active = false;
  });
}