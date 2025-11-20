import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwIh78atmiIcevNvakXcex9o47HlKgDSp8hWkTxSjzzICNg2mf9HXfOMy32CuoRynoX/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Prepare form data for Google Sheets
    const formData = new URLSearchParams({
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      company: body.company || '',
      service: body.service || '',
      message: body.message,
    });

    // Make request to Google Apps Script
    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    // Google Apps Script returns HTML or JSON depending on configuration
    // We'll check if the response is ok
    if (!response.ok) {
      throw new Error(`Google Sheets API returned status ${response.status}`);
    }

    // Try to parse response, but it might be HTML
    let responseData;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      // If it's HTML (common with Google Apps Script), that's usually fine
      const text = await response.text();
      responseData = { success: true, message: 'Form submitted successfully' };
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully', data: responseData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit form', 
        message: error instanceof Error ? error.message : 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}


