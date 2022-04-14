import { MainButton, PendingButton } from "../UI/Buttons";
import * as S from "./ProfileStyled";

const Profile = ({ pending, profile }) => {
  return (
    <S.Card>
      <S.ProfileImage src={profile.photoUrl} />
      <S.ProfileName>
        {profile.firstName} {profile.lastName}
      </S.ProfileName>
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
