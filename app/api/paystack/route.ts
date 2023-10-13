import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { paystack } from "@/lib/paystack";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // const userSubscription = await prismadb.userAIusagecount.findUnique({
    //   where: {
    //     userId,
    //   },
    // });

    // if (userSubscription && userSubscription.paystackCustomerId) {
    //   const subscription = await paystack.initializePayment(
    //     userSubscription.paystackCustomerId
    //   );

    //   return new NextResponse(JSON.stringify({ url: subscription.url }));
    // }

    const subscription = await paystack.initializePayment({
      email: user.emailAddresses[0].emailAddress,
    });

    return new NextResponse(JSON.stringify({ url: subscription.url }));
  } catch (error) {
    console.log("[PAYSTACK_ERROR]", error);
    return new NextResponse("[PAYSTACK_ERROR]", { status: 500 });
  }
}
