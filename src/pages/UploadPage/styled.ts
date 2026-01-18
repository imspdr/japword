import styled from "@emotion/styled";
import { Typography, Button } from "@imspdr/ui";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px); // Subtract header height
  padding: 20px;
  box-sizing: border-box;
`;

export const MessageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background: var(--imspdr-background-bg2);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const Title = styled(Typography)`
  color: var(--imspdr-foreground-fg1);
  margin-bottom: 8px;
`;

export const Description = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
  margin-bottom: 16px;
`;


