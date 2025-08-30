"use client";

import React, { useRef } from "react";
import { SplashedPushNotifications, SplashedPushNotificationsHandle } from "@/app/the-actual-components/splashed-push-notifications/SplashedPushNotifications"

const baseButton =
  "w-[172px] px-5 py-3 rounded-[5px] font-bold text-[1.1rem] mx-[2] my-1 " +
  "transition-colors duration-300 outline-none border-none text-white";

export default function SplashedPushNotificationsFullPageDemo() {
  const toastRef = useRef<SplashedPushNotificationsHandle>(null);

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden scrollbar-hide p-4 gap-2 box-border">
      <div>
        {/* English Buttons (LTR) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-1">
          <button
            className={`${baseButton} bg-[#0070E0] hover:bg-[#05478A]`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "help",
                "James Matthew Barrie",
                "Would you like an adventure now, or would you like to have your tea first?"
              )
            }
          >
            Help (LTR)
          </button>
          <button
            className={`${baseButton} bg-[#03A65A] hover:bg-[#005E38]`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "success",
                "Anaïs Nin",
                "We don't see things as they are, we see them as we are."
              )
            }
          >
            Success (LTR)
          </button>
          <button
            className={`${baseButton} bg-[#FC8621] hover:bg-[#C24914]`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "warning",
                "Oscar Wilde",
                "There are only two tragedies in life: One is not getting what one wants, and the other is getting it."
              )
            }
          >
            Warning (LTR)
          </button>
          <button
            className={`${baseButton} bg-[#DB3056] hover:bg-[#851D41]`}
            type="button"
            onClick={() =>
              toastRef.current?.createNotification(
                "error",
                "Lao Tzu",
                "When I let go of what I am, I become what I might be."
              )
            }
          >
            Error (LTR)
          </button>
        </div>

        {/* Hebrew Buttons (RTL) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-1">
          <button
            className={`${baseButton} bg-[#0070E0] hover:bg-[#05478A]`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "help",
                "ג'יימס מתיו בארי",
                'האם תרצי את ההרפתקה שלך עכשיו, או שמא נשתה תה לפני כן?'
              )
            }
          >
            Help (RTL)
          </button>
          <button
            className={`${baseButton} bg-[#03A65A] hover:bg-[#005E38]`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "success",
                "אנאיס נין",
                'אנחנו לא רואים את הדברים כפי שהם, אנחנו רואים אותם כפי שאנחנו.'
              )
            }
          >
            Success (RTL)
          </button>
          <button
            className={`${baseButton} bg-[#FC8621] hover:bg-[#C24914]`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "warning",
                "אוסקר ויילד",
                'יש רק שתי טרגדיות בעולם הזה. האחת היא לא לקבל את מה שרוצים והשנייה היא לקבל.'
              )
            }
          >
            Warning (RTL)
          </button>
          <button
            className={`${baseButton} bg-[#DB3056] hover:bg-[#851D41]`}
            type="button"
            onClick={() =>
              toastRef.current?.createRtlNotification(
                "error",
                "לאו צה",
                'כשאני מרפה ממי שאני, אני הופך למה שאפשרי עבורי להיות.'
              )
            }
          >
            Error (RTL)
          </button>
        </div>

        <SplashedPushNotifications
          ref={toastRef}
        />
      </div>
    </div>
  );
}
