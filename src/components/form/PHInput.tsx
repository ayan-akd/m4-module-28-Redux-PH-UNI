import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "antd";

export default function PHInput({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label?: string;
}) {
  return (
    <div>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} id={name} type={type} />}
      />
    </div>
  );
}
