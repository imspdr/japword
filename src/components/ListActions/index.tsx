import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { Stack, Typography, useModal, useToast } from '@imspdr/ui';
import { useAuth } from '../../hooks/useAuth';
import { ActionButton, ButtonGroup, ModalCancelButton, ModalConfirmButton } from './styled';

const ListActions: FC = () => {
  const navigate = useNavigate();
  const { user, isAllowed } = useAuth();
  const { openModal, closeModal } = useModal();
  const { showToast } = useToast();

  const handleUploadClick = () => {
    if (user && isAllowed) {
      navigate('/upload');
    } else {
      const message = user
        ? '현재 계정은 권한이 없습니다.\n관리자 계정으로 로그인하시겠습니까?'
        : '단어를 등록하려면 관리자 권한(로그인)이 필요합니다.\n로그인하시겠습니까?';

      openModal(
        message,
        {
          title: '로그인 필요',
          footer: (
            <Stack justifyContent="flex-end" gap="8px">
              <ModalCancelButton onClick={() => closeModal()}>취소</ModalCancelButton>
              <ModalConfirmButton
                onClick={async () => {
                  try {
                    closeModal();
                    const provider = new GoogleAuthProvider();
                    const result = await signInWithPopup(auth, provider);

                    // Check permission manually for immediate navigation
                    const userDoc = await getDoc(
                      doc(db, 'allowedUsers', result.user.uid)
                    );

                    if (userDoc.exists()) {
                      showToast('로그인되었습니다! 페이지로 이동합니다.');
                      navigate('/upload');
                    } else {
                      showToast('로그인되었으나 접근 권한이 없습니다.');
                    }
                  } catch (error) {
                    // console.error(error); // Do not use console
                    showToast('로그인에 실패했습니다.');
                  }
                }}
              >
                확인
              </ModalConfirmButton>
            </Stack>
          ),
        }
      );
    }
  };

  return (
    <ButtonGroup>
      <ActionButton onClick={() => navigate('/quiz')}>
        <Typography variant="body" level={1}>
          퀴즈 풀기
        </Typography>
      </ActionButton>
      <ActionButton onClick={handleUploadClick}>
        <Typography variant="body" level={1}>
          단어 등록
        </Typography>
      </ActionButton>
    </ButtonGroup>
  );
};

export default ListActions;
