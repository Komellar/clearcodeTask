import { useDispatch } from "react-redux";
import { friendsActions } from "../../store/slices/friends-slice";
import { MainButton, PendingButton } from "../UI/Buttons";
import * as S from "./ProfileStyled";

const Profile = ({ pending, profile }) => {
  const dispatch = useDispatch();

  const acceptBtnHandler = () => {
    dispatch(friendsActions.addToFriendsList(profile));
  };

  const removeBtnHandler = () => {
    dispatch(friendsActions.removeFromFriendsList(profile));
  };

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
            <MainButton secondary onClick={removeBtnHandler}>
              Reject
            </MainButton>
            <MainButton onClick={acceptBtnHandler}>Accept</MainButton>
          </S.ProfileActions>
        </>
      )}
      {!pending && (
        <>
          <PendingButton>Accepted</PendingButton>
          <S.ProfileActions pending={true}>
            <MainButton secondary onClick={removeBtnHandler}>
              Remove
            </MainButton>
          </S.ProfileActions>
        </>
      )}
    </S.Card>
  );
};

export default Profile;
