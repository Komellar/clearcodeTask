import { MainButton, PendingButton } from "../../components/UI/Buttons";
import * as S from "./ProfileStyled";

const Profile = ({ pending, profile }) => {
  return (
    <S.Card>
      <S.ProfileImage src={profile.img} />
      <S.ProfileName>{profile.name}</S.ProfileName>
      {pending && (
        <>
          <PendingButton secondary>Pending Invitation</PendingButton>
          <S.ProfileActions>
            <MainButton secondary>Reject</MainButton>
            <MainButton>Accept</MainButton>
          </S.ProfileActions>
        </>
      )}
      {!pending && (
        <>
          <PendingButton>Accepted</PendingButton>
          <S.ProfileActions pending={pending}>
            <MainButton secondary>Remove</MainButton>
          </S.ProfileActions>
        </>
      )}
    </S.Card>
  );
};

export default Profile;
