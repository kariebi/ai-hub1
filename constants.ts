import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;
export const MAX_PAID_COUNTS =500
export const SUBSCRIPTION_PRICE=700000

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-white",
    bgColor: "bg-black",
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-white",
    bgColor: "bg-black",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-white",
    bgColor: "bg-black",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-white",
    bgColor: "bg-black",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-white",
    bgColor: "bg-black",
    href: '/code',
  },
];
