"use client";

import FeatureSection from "./FeatureSection";
import WishList from "./WishList";

const WishListWrapper = ({
  children,
  backgroundColorClass,
}: {
  children: React.ReactNode;
  backgroundColorClass: string;
}) => (
  <div className={`${backgroundColorClass} w-full`}>
    <div className="w-full max-w-[1240px] mx-auto px-4 py-16">{children}</div>
  </div>
);

const FeaturesShow = () => {
  const bgColors = [
    "bg-gradient-to-br from-[#B7CEED] via-[#C8D4F0] to-[#DDB9DF]",
    "bg-gradient-to-br from-[#DDE6F9] via-[#F4F6FA] to-[#FFFDF9]",
  ];

  const features = [
    {
      subtitle: "Smart Timeline",
      title: "Know Exactly What's Next",
      description:
        "Couples answer a few starter questions and Promesse auto-builds a full wedding roadmap—every booking, reminder, and deadline lined up in seconds. When plans change, a simple drag-and-drop or AI prompt instantly reshuffles the entire schedule.",
      media: "/landing_page/task_calender.svg",
      mediaWrapperStyle: "p-8 max-h-[448px]",
    },
    {
      subtitle: "Budget Manager",
      title: "Stay on Budget No Spreadsheets",
      description:
        "A single budget entry sets real-time tracking in motion. Snap receipts or add expenses manually and Promesse auto-categorises every cost, displaying live spend-versus-remaining bars and alerting users before they overshoot.",
      media: "/landing_page/spending_graph.svg",
      mediaWrapperStyle: "pt-7 w-[573px] h-[575px]",
      imagePosition: "right" as "right",
    },
    {
      subtitle: "Guest List & Invites",
      title: "RSVPs Sorted in One Tap",
      description:
        "Upload contacts, send digital invites, and watch RSVPs update automatically. Never miss out on your friends' responses, and get real-time insights into who's coming to make planning effortless.",
      media: "/landing_page/guest_list.svg",
      mediaWrapperStyle: "pt-10 w-[566px] h-[546px]",
    },
    {
      subtitle: "Your Personal AI Assistant",
      title: "Instant Answers, Anytime",
      description:
        "Built-in conversational AI delivers personalised guidance on vendors, etiquette, budgeting, or timeline tweaks—24/7 and fully context-aware of each couple’s unique event details.",
      media: "/landing_page/instant_chat.svg",
      mediaWrapperStyle: "pt-6 max-w-[566px] h-[546px]",
      imagePosition: "right" as "right",
    },
    {
      subtitle: "Personal Moodboards",
      title: "Turn Inspiration into a Clear Vision",
      description:
        "Drag images into themed boards—Décor, Venue, Dresses, Flowers—then rearrange, annotate, and share. Vendors and partners see exactly what the couple has in mind, accelerating decision-making.",
      media: "/landing_page/image_grid.svg",
      mediaWrapperStyle: "pt-6 w-[566px] h-[546px]",
    },
    {
      subtitle: "Real-Time Collaboration",
      title: "Plan Together, Wherever",
      description:
        "Invite a partner or family member with one click. Every task update, budget entry, and moodboard change syncs instantly across devices, keeping the entire planning team on the same page.",
      media: "/landing_page/invite.svg",
      mediaWrapperStyle: "w-[566px] h-[546px]",
      imagePosition: "right" as "right",
    },
  ];

  return (
    <>
      {features.map((feature, i) => (
        <FeatureSection
          key={i}
          {...feature}
          backgroundColorClass={i % 2 === 0 ? bgColors[0] : bgColors[1]}
        />
      ))}

      <WishListWrapper
        backgroundColorClass={
          features.length % 2 === 0 ? bgColors[0] : bgColors[1]
        }
      >
        <WishList />
      </WishListWrapper>
    </>
  );
};

export default FeaturesShow;
