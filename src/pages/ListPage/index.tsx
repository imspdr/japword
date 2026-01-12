import { FC } from 'react';
import { Typography } from '@imspdr/ui';
import { useDeviceType } from '@imspdr/ui';
import { LoadingContainer, PageContainer } from './styled';

const ListPage: FC = () => {
  const { isLoading, isError } = { isLoading: false, isError: false };

  if (isLoading) {
    return (
      <LoadingContainer>
        <Typography variant="body" level={1}>
          데이터를 불러오는 중입니다...
        </Typography>
      </LoadingContainer>
    );
  }

  if (isError) {
    return (
      <LoadingContainer>
        <Typography variant="body" level={1} style={{ color: 'red' }}>
          데이터를 불러오는 중 오류가 발생했습니다.
        </Typography>
      </LoadingContainer>
    );
  }

  return (
    <PageContainer>
    </PageContainer>
  );
};

export default ListPage;
