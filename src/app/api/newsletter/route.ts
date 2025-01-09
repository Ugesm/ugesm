import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisez Resend avec votre clé API
const apiKey = process.env.RESEND_API_KEY;
console.log('API Key disponible:', !!apiKey);

const resend = new Resend(apiKey);

// L'adresse email où vous voulez recevoir les notifications
const NOTIFICATION_EMAIL = 'khadimseye2004@gmail.com';

export async function POST(request: Request) {
  console.log('Début de la requête POST newsletter');
  
  try {
    // Vérifier si la clé API est configurée
    if (!apiKey) {
      console.error('Erreur : RESEND_API_KEY non configurée');
      return NextResponse.json(
        { error: 'Configuration du service d\'email manquante. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      );
    }

    let email;
    try {
      const body = await request.json();
      email = body.email;
      console.log('Email reçu:', email);
    } catch (parseError) {
      console.error('Erreur de parsing JSON:', parseError);
      return NextResponse.json(
        { error: 'Format de requête invalide' },
        { status: 400 }
      );
    }

    // Validation de l'email
    if (!email || !email.includes('@')) {
      console.log('Email invalide:', email);
      return NextResponse.json(
        { error: 'Veuillez entrer une adresse e-mail valide' },
        { status: 400 }
      );
    }

    try {
      console.log('Tentative d\'envoi d\'email avec Resend');
      
      // Envoi de l'email de notification
      const data = await resend.emails.send({
        from: 'UGESM Newsletter <onboarding@resend.dev>',
        to: NOTIFICATION_EMAIL,
        subject: 'Nouvelle inscription à la newsletter UGESM',
        html: `
          <h2>Nouvelle inscription à la newsletter</h2>
          <p>Un nouvel utilisateur s'est inscrit à la newsletter UGESM :</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
        `
      });

      console.log('Réponse de Resend:', data);

      if (!data || data.error) {
        console.error('Erreur Resend:', data?.error || 'Pas de données retournées');
        throw new Error(data?.error?.message || 'Erreur lors de l\'envoi de l\'email');
      }
      
      console.log('Email envoyé avec succès');
      return NextResponse.json(
        { message: 'Inscription réussie à la newsletter' },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Erreur détaillée lors de l\'envoi de l\'email:', emailError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Erreur générale:', error);
    return NextResponse.json(
      { error: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}
