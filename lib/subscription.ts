import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { MAX_PAID_COUNTS } from "@/constants";

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userAIusagecount = await prismadb.userAIusagecount.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userAIusagecount) {
    return false;
  }

  // logic for validation 
  const isValid =
    userAIusagecount.count!==0 &&
    userAIusagecount.count<= MAX_PAID_COUNTS
    
  return !!isValid;
};





export const incrementAIusagecount = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userAIusagecount = await prismadb.userAIusagecount.findUnique({
    where: { userId: userId },
  });

  if (userAIusagecount) {
    await prismadb.userAIusagecount.update({
      where: { userId: userId },
      data: { count: userAIusagecount.count + 1 },
    });
  } else {
    await prismadb.userAIusagecount.create({
      data: { userId: userId, count: 1 },
    });
  }
};




export const checkAIusagecount = async () => {  
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userAIusagecount = await prismadb.userAIusagecount.findUnique({
    where: { userId: userId },
  });

  if (!userAIusagecount || userAIusagecount.count < MAX_PAID_COUNTS) {
    return true;
  } else {
    return false;
  }
};



export const getAIusagecount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userAIusagecount = await prismadb.userAIusagecount.findUnique({
    where: {
      userId
    }
  });

  if (!userAIusagecount) {
    return 0;
  }

  return userAIusagecount.count;
};
