import styled from "@emotion/styled";

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
  align-items: center;
  gap: 16px;
  width: 100%;
  text-align: center;
`;

export const KanjiWrapper = styled.div`
  & > * {
    font-size: 4rem !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const TextWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
`;

export const DateWrapper = styled.div`
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
`;
