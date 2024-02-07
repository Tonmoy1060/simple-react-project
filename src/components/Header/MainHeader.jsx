import logo from "../../assets/profile.png";

export default function MainHeader() {
  return (
    <div className="border-b ">
      <div className="flex items-center justify-between pb-7">
        <h1 className="text-4xl font-black">Knowledge Cafe</h1>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
