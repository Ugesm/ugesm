import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    resendKey: process.env.RESEND_API_KEY ? 'Configuré' : 'Non configuré',
    keyLength: process.env.RESEND_API_KEY?.length || 0,
    envVars: Object.keys(process.env).filter(key => key.includes('RESEND'))
  });
}
