import { FieldValues, FormProvider, useForm } from "react-hook-form";

export default function PHForm({
  onSubmit,
  children,
}: {
  onSubmit: (data: FieldValues) => void;
  children: React.ReactNode;
}) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
