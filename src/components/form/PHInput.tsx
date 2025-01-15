import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PHInput({
  type,
  name,
  label
}: {
  type: string;
  name: string;
  label?: string;
}) {
  const { register } = useFormContext();
  return <>
  {label ? <Label htmlFor={name}>{label}</Label> : null}
  <Input id={name} type={type} {...register(name)} />
  </>
}
