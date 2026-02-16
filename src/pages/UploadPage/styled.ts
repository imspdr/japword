import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px); // Subtract header height
  padding: 20px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const MessageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background: var(--imspdr-background-2);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 8px;
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 16px;
`;
