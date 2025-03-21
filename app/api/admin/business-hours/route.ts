import { NextRequest, NextResponse } from 'next/server';
import { setBusinessPeriodActive, addHolidayClosure } from '@/lib/business-periods';

export async function POST(request: NextRequest) {
  try {
    const { 
      action, 
      periodName, 
      active, 
      date, 
      descriptionEn, 
      descriptionAr,
      hoursEn,
      hoursAr
    } = await request.json();
    
    if (action === 'setPeriod' && periodName) {
      setBusinessPeriodActive(periodName, active === true);
      return NextResponse.json({ 
        success: true, 
        message: `Business period ${periodName} ${active ? 'activated' : 'deactivated'}` 
      });
    } 
    else if (action === 'addHoliday' && date && descriptionEn && descriptionAr) {
      const holidayDate = new Date(date);
      addHolidayClosure(
        holidayDate, 
        descriptionEn, 
        descriptionAr,
        hoursEn, // Optional custom hours
        hoursAr  // Optional custom hours
      );
      return NextResponse.json({ 
        success: true, 
        message: `Holiday closure added for ${holidayDate.toLocaleDateString()}` 
      });
    }
    
    return NextResponse.json(
      { success: false, error: 'Invalid action or missing parameters' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error updating business hours:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update business hours' },
      { status: 500 }
    );
  }
}
