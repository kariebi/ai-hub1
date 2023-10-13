import axios from 'axios';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

// import prismadb from '@/lib/prismadb';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY; // Replace with your actual Paystack secret key

export async function POST(req: Request) {
  const body = await req.text();
//   const signature = headers().get('paystack-signature') as string;

  let event: any; // Event type needs to be adjusted based on Paystack's webhook event structure

  try {
    event = JSON.parse(body);
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  // Verify the webhook event using the signature
//   const isSignatureValid = verifyPaystackWebhookSignature(body, signature);
//   if (!isSignatureValid) {
//     return new NextResponse('Invalid signature', { status: 400 });
//   }

  if (event.event === 'charge.success') { // Adjust event type based on Paystack's webhook events
    const transactionReference = event.data.reference;
    const verifiedTransaction = await verifyPaystackTransaction(transactionReference);

    if (verifiedTransaction.status === 'success') {
      // Handle your logic here for a successful transaction
    }
  }

  return new NextResponse(null, { status: 200 });
}

async function verifyPaystackTransaction(reference: string) {
  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('Paystack Verification Error:', error.message);
    return { status: 'error' };
  }
}

// function verifyPaystackWebhookSignature(payload: string, signature: string) {
//   // Implement Paystack webhook signature verification logic
//   // Compare the calculated signature with the provided signature
//   // Return true if signatures match, else return false
//   // Make sure to follow Paystack's signature verification documentation
// }
