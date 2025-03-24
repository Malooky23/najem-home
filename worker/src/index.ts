import nodemailer from 'nodemailer';

interface Env {
	SMTP_HOST: string;
	SMTP_PORT: string;
	SMTP_SECURE: string;
	SMTP_USER: string;
	SMTP_PASSWORD: string;
  EMAIL_FROM: string;
  ADMIN_EMAIL: string;
}

export default {
	async fetch(request: Request, env: Env) {
		if (request.method === 'POST') {
			try {
				const { to, subject, html, replyTo } = await request.json() as any;

				// Configure nodemailer with SMTP settings from environment variables
				const transporter = nodemailer.createTransport({
					host: env.SMTP_HOST,
					port: Number(env.SMTP_PORT),
					secure: env.SMTP_SECURE === 'true', // Use SSL
					auth: {
						user: env.SMTP_USER,
						pass: env.SMTP_PASSWORD,
					},
				});

				// Send email
				await transporter.sendMail({
					from: env.EMAIL_FROM,
					to: to,
					subject: subject,
					html: html,
          replyTo: replyTo
				});

				return new Response('Email sent successfully');
			} catch (error) {
				console.error('Error sending email:', error);
				return new Response('Failed to send email', { status: 500 });
			}
		}

		return new Response('Not found', { status: 404 });
	},
};