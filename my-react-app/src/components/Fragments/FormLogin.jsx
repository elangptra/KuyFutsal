import Button from "../elements/button";
import Input from "../elements/input";

const FormLogin = () => {
  return (
    <form>
      <Input
        type="text"
        placeholder="Username"
        name="username"
      />

      <Input
        type="password"
        placeholder="Password"
        name="password"
      />
      <div className="flex justify-between mb-4">
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2"
          />
          <label htmlFor="remember">Ingat saya</label>
        </div>
        <a href="#">Lupa sandi?</a>
      </div>

      <Button type="submit" classname="bg-black w-full">
        Masuk
      </Button>
      
    </form>
  );
};
export default FormLogin;
