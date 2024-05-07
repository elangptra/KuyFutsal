import Button from "../elements/button";
import Input from "../elements/input";

const FormRegister = () => {
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
      <Input
        type="password"
        placeholder="Konfirmasi Password"
        name="password"
      />
      

      <Button type="submit" classname="bg-black w-full">
        Daftar
      </Button>
      
    </form>
  );
};
export default FormRegister;
