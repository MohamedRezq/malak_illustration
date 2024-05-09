"use client";
import React from "react";

// ** Form
import { FormProvider, useForm } from "react-hook-form";
import Form from "./Form";

export default function ContactPage() {
  // ** Hooks
  const methods = useForm({
    mode: "onChange",
  });

  // ** Handlers
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="flex p-10 md:p-20 min-h-screen flex-col items-start gap-10">
      <h1 className="text-3xl md:text-4xl text-light-coral-2 font-semibold">
        تواصل معى
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-md md:text-lg">
          تستطيع التواصل معى عن طريق تعبئة النموذج أدناه{" "}
        </p>
        <p className="text-md md:text-lg text-light-coral-2">
          الحقول التي عليها علامة النجمة (*) مطلوبة.
        </p>
      </div>
      <FormProvider
        {...methods}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Form isValid={methods.formState.isValid} />
      </FormProvider>
    </main>
  );
}
