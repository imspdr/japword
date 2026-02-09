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
  color: var(--imspdr-primary-1);
  font-weight: 700;
  text-align: center;
  font-size: 4rem;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  width: 100%;
  border-bottom: 1px solid var(--imspdr-background-3);

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled(Typography)`
  color: var(--imspdr-foreground-2);
`;

export const Value = styled(Typography)`
  color: var(--imspdr-foreground-1);
  white-space: pre-wrap;
  line-height: 1.6;
  text-align: center;
`;

export const DateCaption = styled(Typography)`
  color: var(--imspdr-foreground-2);
  font-size: 0.8rem;
  text-align: center;
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  justify-content: center;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  width: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
`;


