import { useDispatch } from "react-redux";
import { friendsActions } from "../../store/slices/friends-slice";
import { useEffect } from "react";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MainButton, PendingButton } from "../UI/Buttons";
import * as S from "./ProfileStyled";

const Profile = ({ pending, profile }) => {
  const animation = useAnimation();
  const { ref, inView } = useInView();

  const initial = { opacity: 0, scale: 0.8 };

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1.0
      });
    }
  }, [inView, animation]);

  const dispatch = useDispatch();

  const acceptBtnHandler = () => {
    dispatch(friendsActions.addToFriendsList(profile));
  };

  const removeBtnHandler = () => {
    dispatch(friendsActions.removeFromFriendsList(profile));
  };

  return (
    <S.Card
      ref={ref}
      initial={initial}
      animate={animation}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
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
