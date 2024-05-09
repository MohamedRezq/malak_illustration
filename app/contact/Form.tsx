"use client";
import React, { useEffect } from "react";

// ** Form
import { Controller, useFormContext } from "react-hook-form";

const Form = ({ isValid }: { isValid: boolean }) => {
  useEffect(() => {}, [isValid]);

  // ** Hooks
  const { control } = useFormContext(); // Access form context

  // Email validation pattern for multiple emails separated by commas
  const emailPattern =
    /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},\s?)*([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4})$/;

  // Mobile Validation
  const mobilePattern =
    /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

  return (
    <form className="grid gap-x-5 gap-y-3 w-full grid-cols-1 md:grid-cols-4">
      <Controller
        name="first-name"
        control={control}
        rules={{
          required: "الإسم الأول مطلوب",
          //   pattern: {
          //     value: emailPattern,
          //     message: "Please enter valid email addresses, separated by commas",
          //   },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex col-span-2 flex-col gap-1 items-start">
            <label className="text-md mx-2 font-bold">الإسم الأول (*)</label>
            <input
              {...field}
              className="border px-3 py-2 w-full rounded-md text-md mt-1"
              type="text"
              placeholder=""
            />
            <div className="text-red-600 text-xs mx-3 mt-1">
              {error?.message || ""}
            </div>
          </div>
        )}
      />
      <Controller
        name="last-name"
        control={control}
        rules={{
          required: "الإسم الأخير مطلوب",
          //   pattern: {
          //     value: emailPattern,
          //     message: "Please enter valid email addresses, separated by commas",
          //   },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex col-span-2 flex-col gap-1 items-start">
            <label className="text-md mx-2 font-bold">الإسم الأخير (*)</label>
            <input
              {...field}
              className="border px-3 py-2 w-full rounded-md text-md mt-1"
              type="text"
              placeholder=""
            />
            <div className="text-red-600 text-xs mx-3 mt-1">
              {error?.message || ""}
            </div>
          </div>
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: "الإيميل مطلوب",
          pattern: {
            value: emailPattern,
            message: "قم بإدخال إيميل صحيح",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex col-span-2 flex-col gap-1 items-start">
            <label className="text-md mx-2 font-bold">الإيميل (*)</label>
            <input
              {...field}
              className="border px-3 py-2 w-full rounded-md text-md mt-1"
              type="email"
              placeholder=""
            />
            <div className="text-red-600 text-xs mx-3 mt-1">
              {error?.message || ""}
            </div>
          </div>
        )}
      />
      <Controller
        name="mobile"
        control={control}
        rules={{
          //   required: "رقم الجوال مطلوب",
          pattern: {
            value: mobilePattern,
            message: "قم بإدخال رقم جوال صحيح داخل المملكة",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex col-span-2 flex-col gap-1 items-start">
            <label className="text-md mx-2 font-bold">رقم الجوال</label>
            <input
              {...field}
              className="border px-3 py-2 w-full rounded-md text-md mt-1"
              type="tel"
              placeholder=""
              required={false}
            />
            <div className="text-red-600 text-xs mx-3 mt-1">
              {error?.message || ""}
            </div>
          </div>
        )}
      />
      <Controller
        name="message"
        control={control}
        rules={{
          required: "الرسالة مطلوبة",
          //   pattern: {
          //     value: emailPattern,
          //     message: "Please enter valid email addresses, separated by commas",
          //   },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex col-span-4 h-40 flex-col gap-1 items-start">
            <label className="text-md mx-2 font-bold">الرسالة (*)</label>
            <textarea
              {...field}
              className="border h-full col-span-4 px-3 py-2 w-full rounded-md text-md mt-1"
              placeholder=""
            />
            <div className="text-red-600 text-xs mx-3 mt-1">
              {error?.message || ""}
            </div>
          </div>
        )}
      />
      <button
        type="submit"
        disabled={!isValid}
        className={`rounded-xl disabled:bg-gray-500 mt-10 w-40 md:w-fit text-center px-10 py-3 underline-offset-8 text-white bg-slate-blue hover:bg-light-coral-2 shadow shadow-gray-700
      }`}
      >
        أرسل
      </button>
    </form>
  );
};

export default Form;
