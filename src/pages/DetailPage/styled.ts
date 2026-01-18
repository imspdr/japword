import styled from "@emotion/styled";
import { Typography } from "@imspdr/ui";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;

export const KanjiDisplay = styled(Typography)`
  color: var(--imspdr-mint-mint1);
  font-weight: 700;
  text-align: center;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const DateCaption = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
  font-size: 0.8rem;
  text-align: center;
`;


