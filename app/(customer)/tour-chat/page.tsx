import { DEFAULT_TOUR_CHAT_GROUP_ID } from "@/lib/customer-tour-chat";
import { redirect } from "next/navigation";

export default function TourChatLandingPage() {
  redirect(`/tour-chat/${DEFAULT_TOUR_CHAT_GROUP_ID}`);
}
