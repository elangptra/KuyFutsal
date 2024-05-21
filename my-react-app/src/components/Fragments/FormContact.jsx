import Button from "../elements/button";
import Input from "../elements/input";

const FormContact = () => {
  return (
    <form>
      <Input
        type="text"
        placeholder="Masukkan nama anda disini.."
        name="nama"
      />

      <Input
        type="email"
        placeholder="Masukkan email anda disini.."
        name="email"
      />
      <textarea
        name="pertanyaan"
        className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 h-32"
        placeholder="Masukkan pertanyaan anda disini.."
      ></textarea>

      <Button type="submit" classname="bg-blue-500 text-white mt-5">
        Kirim
      </Button>
    </form>
  );
};
export default FormContact;
