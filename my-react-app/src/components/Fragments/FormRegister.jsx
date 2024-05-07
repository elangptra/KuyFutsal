import Button from "../elements/button";
import Input from "../elements/input";

const FormRegister = () => {
  return (
    <form>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        placeholder="Username"
      />

      <Input
        type="password"
        placeholder="Password"
        name="password"
        placeholder="Password"
      />
      <Input
        type="password"
        placeholder="Konfirmasi Password"
        name="password"
        placeholder="Konfirmasi Password"
      />
      

      <Button type="submit" classname="bg-black text-white w-full">
        Daftar
      </Button>
      
    </form>
  );
};
export default FormRegister;
