import styled from "@emotion/styled";
import { Typography } from "@imspdr/ui";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--imspdr-foreground-fg2);
  
  &:hover {
    color: var(--imspdr-foreground-fg1);
  }
`;

export const DetailCard = styled.div`
  background: var(--imspdr-background-bg1);
  border: 1px solid var(--imspdr-border-border1);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

export const KanjiDisplay = styled(Typography)`
  color: var(--imspdr-mint-mint1);
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--imspdr-border-border1);

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
`;

export const Value = styled(Typography)`
  color: var(--imspdr-foreground-fg1);
  white-space: pre-wrap;
  line-height: 1.6;
`;

export const DeleteButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  width: 100%;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
