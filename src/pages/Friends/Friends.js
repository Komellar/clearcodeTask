// import friendsService from "../../services/friendsService";
import { MainButton, PendingButton } from "../../components/UI/Buttons";
import { Input } from "../../components/UI/Input";
import Profile from "./Profile";

const Friends = () => {
  // console.log(friendsService.getList);

  return (
    <div style={{ backgroundColor: "#ccc", padding: "50px 10px" }}>
      <h1>Me and my friends</h1>
      <MainButton>primary</MainButton>
      <MainButton secondary>secondary</MainButton>
      <PendingButton>Pending</PendingButton>
      <PendingButton secondary>Pending</PendingButton>
      <Input type="text" placeholder="Search by name" />
      <Profile
        pending={true}
        profile={{
          img: "https://minimaltoolkit.com/images/randomdata/female/1.jpg",
          name: "Joe Doe"
        }}
      />
      <Profile
        pending={false}
        profile={{
          img: "https://minimaltoolkit.com/images/randomdata/female/1.jpg",
          name: "Joe Doe"
        }}
      />
    </div>
  );
};

export default Friends;
