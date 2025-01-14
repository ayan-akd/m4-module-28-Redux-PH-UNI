import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Login() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TData>({
    defaultValues: {
      userId: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();
  type TData = {
    userId: string;
    password: string;
  };
  const onSubmit = async (data: TData) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <Card className="w-1/4 mt-20">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Login to your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="id">ID</Label>
                <Input id="id" type="text" {...register("userId")} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="text" {...register("password")} />
              </div>
            </CardContent>
            <CardFooter>
              <Button htmlType="submit" className="mx-auto">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
