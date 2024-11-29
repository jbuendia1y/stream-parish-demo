import { User } from "../models/User";

const USER: User = {
  avatar:
    "https://fastly.picsum.photos/id/237/100/100.jpg?hmac=Pna_vL4vYBRMXxFMY-lYXcZAL34T7PZWdNDlEOwqqE4",
  email: "example@example.com",
  username: "user example",
};

export class UserAuthentication {
  get token() {
    return localStorage.getItem("@StreamParish/TOKEN");
  }
  set token(value: string | null) {
    if (!value) localStorage.removeItem("@StreamParish/TOKEN");
    else localStorage.setItem("@StreamParish/TOKEN", value);
  }

  login(email: string, password: string): Promise<User> {
    if (email === "example@example.com" && password === "example")
      return Promise.resolve(USER);

    return Promise.reject(new Error("Incorrect email or password"));
  }

  getProfile(): Promise<User> {
    if (!this.token) return Promise.reject(new Error("USER NOT LOGGED"));
    return Promise.resolve(USER);
  }
}
