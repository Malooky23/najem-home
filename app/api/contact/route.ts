import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { name, email, phone, service, message, locale } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format service name for display
    const serviceMap: Record<string, { en: string, ar: string }> = {
      'containerShipping': {
        en: 'Container Shipping',
        ar: 'شحن الحاويات',
      },
      'freightForwarding': {
        en: 'Freight Forwarding',
        ar: 'خدمات الشحن',
      },
      'customsClearance': {
        en: 'Customs Clearance',
        ar: 'التخليص الجمركي',
      },
      'carTransportation': {
        en: 'Car Transportation',
        ar: 'نقل السيارات',
      },
      'warehousing': {
        en: 'Warehousing Solutions',
        ar: 'حلول التخزين',
      },
      'other': {
        en: 'Other Services',
        ar: 'خدمات أخرى',
      },
    };

    // Get localized service name
    const serviceName =
      service && serviceMap[service]
        ? locale === 'ar'
          ? serviceMap[service].ar
          : serviceMap[service].en
        : locale === 'ar'
        ? 'غير محدد'
        : 'Not specified';

    // Format date based on locale
    const currentDate = new Date().toLocaleDateString(
      locale === 'ar' ? 'ar-AE' : 'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }
    );

    // Define logo URL
    const logoUrl = 'https://www.najemaleen.com/op-logo.jpg';

    // Create confirmation email for customer based on locale
    const customerEmailSubject =
      locale === 'ar'
        ? 'شكراً للتواصل مع نجم الين للشحن'
        : 'Thank you for contacting Najem Aleen Shipping';

    const customerEmailHTML =
      locale === 'ar'
        ? `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; direction: rtl; text-align: right;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoUrl}" alt="Najem Aleen Shipping" style="max-width: 200px; height: auto;">
          </div>
          <h2>شكراً ${name} للتواصل معنا</h2>
          <p>لقد استلمنا رسالتك وسنقوم بالرد عليك قريباً.</p>
          <p>فيما يلي نسخة من استفسارك:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>الإسم:</strong> ${name}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p><strong>رقم الهاتف:</strong> ${phone}</p>
            <p><strong>الخدمة:</strong> ${serviceName}</p>
            <p><strong>الرسالة:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            <p><strong>تاريخ الإرسال:</strong> ${currentDate}</p>
          </div>
          <p>نحن نقدر تواصلك معنا وسنبذل قصارى جهدنا للرد في أقرب وقت ممكن.</p>
          <p>مع أطيب التحيات،<br>فريق نجم الين للشحن</p>
        </div>
      `
        : `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoUrl}" alt="Najem Aleen Shipping" style="max-width: 200px; height: auto;">
          </div>
          <h2>Thank you, ${name}, for contacting us</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Here's a copy of your inquiry:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${serviceName}</p>
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            <p><strong>Submitted on:</strong> ${currentDate}</p>
          </div>
          <p>We appreciate your interest and will do our best to respond as soon as possible.</p>
          <p>Best regards,<br>Najem Aleen Shipping Team</p>
        </div>
      `;

    // Create notification email for admin
    const adminEmailSubject = `New Contact Form Submission: ${name}`;
    const adminEmailHTML = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${logoUrl}" alt="Najem Aleen Shipping" style="max-width: 200px; height: auto;">
        </div>
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from the contact form on your website.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${
            service ? serviceMap[service].en : 'Not specified'
          }</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          <p><strong>Locale:</strong> ${locale}</p>
          <p><strong>Submitted on:</strong> ${new Date().toLocaleString(
            'en-US'
          )}</p>
        </div>
        <p>You can reply directly to this email to respond to the customer.</p>
      </div>
    `;

    // Send data to Cloudflare Worker
    const workerResponse = await fetch('https://email-worker.malooky23.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [email, process.env.ADMIN_EMAIL],
        subject: `[Najem Aleen] ${customerEmailSubject} / ${adminEmailSubject}`,
        html: `Customer Email:<br>${customerEmailHTML}<br><br>Admin Email:<br>${adminEmailHTML}`,
        replyTo: email
      }),
    });

    if (!workerResponse.ok) {
      const errorData = await workerResponse.text();
      console.error('Error sending email via worker:', errorData);
      return NextResponse.json(
        { success: false, error: 'Failed to send email via worker', details: errorData },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
