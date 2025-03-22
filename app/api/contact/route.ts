import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer with SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.yandex.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true' || true, // Use SSL
  auth: {
    user: process.env.SMTP_USER || 'malek@najemaleen.com',
    pass: process.env.SMTP_PASSWORD,
  },
});

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
        ar: 'شحن الحاويات' 
      },
      'freightForwarding': { 
        en: 'Freight Forwarding', 
        ar: 'خدمات الشحن' 
      },
      'customsClearance': { 
        en: 'Customs Clearance', 
        ar: 'التخليص الجمركي' 
      },
      'carTransportation': { 
        en: 'Car Transportation', 
        ar: 'نقل السيارات' 
      },
      'warehousing': { 
        en: 'Warehousing Solutions', 
        ar: 'حلول التخزين' 
      },
      'other': { 
        en: 'Other Services', 
        ar: 'خدمات أخرى' 
      }
    };
    
    // Get localized service name
    const serviceName = service && serviceMap[service] 
      ? (locale === 'ar' ? serviceMap[service].ar : serviceMap[service].en) 
      : (locale === 'ar' ? 'غير محدد' : 'Not specified');
    
    // Format date based on locale
    const currentDate = new Date().toLocaleDateString(
      locale === 'ar' ? 'ar-AE' : 'en-US',
      { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    );
    
    // Create confirmation email for customer based on locale
    const customerEmailSubject = locale === 'ar' 
      ? 'شكراً للتواصل مع نجم العين للشحن' 
      : 'Thank you for contacting Najem Aleen Shipping';
      
    const customerEmailHTML = locale === 'ar' 
      ? `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; direction: rtl; text-align: right;">
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
          <p>مع أطيب التحيات،<br>فريق نجم العين للشحن</p>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
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
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from the contact form on your website.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service ? serviceMap[service].en : 'Not specified'}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          <p><strong>Locale:</strong> ${locale}</p>
          <p><strong>Submitted on:</strong> ${new Date().toLocaleString('en-US')}</p>
        </div>
        <p>You can reply directly to this email to respond to the customer.</p>
      </div>
    `;
    
    try {
      // Send confirmation email to customer
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'Najem Aleen Shipping <malek@najemaleen.com>',
        to: email,
        subject: customerEmailSubject,
        html: customerEmailHTML
      });
      
      // Send notification email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'Website Contact Form <malek@najemaleen.com>',
        to: process.env.ADMIN_EMAIL || 'malek@najemaleen.com',
        subject: adminEmailSubject,
        html: adminEmailHTML,
        replyTo: email  // Add back the reply-to header
      });
      
      // Return success response
      return NextResponse.json(
        { 
        success: true, 
        message: 'Form submitted successfully' 
      }
    );
      
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return NextResponse.json(
        { success: false, error: 'Failed to send emails' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
