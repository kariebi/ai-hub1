import axios from 'axios';
import { NextResponse } from 'next/server';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const paystackInstance = axios.create({
  baseURL: 'https://api.paystack.co/',
  headers: {
    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const paystack = {
  initializePayment: async (email:any) => {
    try {
      const response = await paystackInstance.post('/transaction/initialize', {
        email,
        amount: 5000,
      });

      console.log('[INITIALIZE_PAYMENT_SUCCESS]:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('[INITIALIZE_PAYMENT_ERROR]:', error.message);
      return new NextResponse(`[INITIALIZE_PAYMENT_ERROR]: : ${error.message}`, { status: 500 });
    }
  }
}
















// export const paystack = {
//   createSubscription: async (customer: string, plan:any) => {
//     try {
//       const response = await paystackInstance.post('/transaction/initialize', {
//         customer,
//         plan,
//       });
//       console.log('[CREATE_SUBSCRIPTION_SUCCESS]:', response.data);
//       return response.data;
//     } catch (error:any) {
//       console.error('[CREATE_SUBSCRIPTION_ERROR]:', error.message);
//       return new NextResponse(`[CREATE_SUBSCRIPTION_ERROR]: ${error.message}`, { status: 500 });
    // }
  // },
  // getSubscriptions: async () => {
  //   try {
  //     const response = await paystackInstance.get('subscription');
  //     console.log('[GET_SUBSCRIPTIONS_SUCCESS]:', response.data);
  //     return response.data;
  //   } catch (error:any) {
  //     console.error('[GET_SUBSCRIPTIONS_ERROR]:', error);
  //     return new NextResponse(error.response ? error.response.data : error, { status: 500 });
  //   }
  // },
  // fetchSubscription: async (idOrCode: string) => {
  //   try {
  //     const response = await paystackInstance.get(`subscription/${idOrCode}`);
  //     console.log('[FETCH_SUBSCRIPTION_SUCCESS]:', response.data);
  //     return response.data;
  //   } catch (error:any) {
  //     console.error('[FETCH_SUBSCRIPTION_ERROR]:', error);
  //     return new NextResponse(error.response ? error.response.data : error, { status: 500 });
  //   }
  // },
  // enableSubscription: async (subscriptionCode: string, emailToken: string) => {
  //   try {
  //     const response = await paystackInstance.post('subscription/enable', {
  //       code: subscriptionCode,
  //       token: emailToken,
  //     });
  //     console.log('[ENABLE_SUBSCRIPTION_SUCCESS]:', response.data);
  //     return response.data;
  //   } catch (error:any) {
  //     console.error('[ENABLE_SUBSCRIPTION_ERROR]:', error);
  //     return new NextResponse(error.response ? error.response.data : error, { status: 500 });
  //   }
  // },
  // disableSubscription: async (subscriptionCode: string, emailToken: string) => {
  //   try {
  //     const response = await paystackInstance.post('subscription/disable', {
  //       code: subscriptionCode,
  //       token: emailToken,
  //     });
  //     console.log('[DISABLE_SUBSCRIPTION_SUCCESS]:', response.data);
  //     return response.data;
  //   } catch (error:any) {
  //     console.error('[DISABLE_SUBSCRIPTION_ERROR]:', error);
  //     return new NextResponse(error.response ? error.response.data : error, { status: 500 });
  //   }
  // },
  // generateUpdateSubscriptionLink: async (subscriptionCode: string) => {
  //   try {
  //     const response = await paystackInstance.get(`subscription/${subscriptionCode}/manage/link`);
  //     console.log('[GENERATE_UPDATE_SUBSCRIPTION_LINK_SUCCESS]:', response.data);
  //     return response.data;
  //   } catch (error:any) {
  //     console.error('[GENERATE_UPDATE_SUBSCRIPTION_LINK_ERROR]:', error);
  //     return new NextResponse(error.response ? error.response.data : error, { status: 500 });
  //   }
  // },
  // sendUpdateSubscriptionLink: async (subscriptionCode: string) => {
  //   try {
  //     const response = await paystackInstance.post(`subscription/${subscriptionCode}/manage/email`);
  //     console.log('[SEND_UPDATE_SUBSCRIPTION_LINK_SUCCESS]:', response.data);
  //     return response.data;
  //   } catch (error:any) {
  //     console.error('[SEND_UPDATE_SUBSCRIPTION_LINK_ERROR]:', error);
  //     return new NextResponse(error.response ? error.response.data : error, { status: 500 });
//   //   }
//   },
// };
