import styled from "@emotion/styled";

export const WidgetContainer = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  height: 240px;
  background: var(--imspdr-background-1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  flex: 1;
  align-items: center;
`;

export const KanjiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * {
    font-size: 3rem !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding-left: 16px;
  height: 80%;
  overflow: hidden;
  text-align: left;
`;

export const TextWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const DescriptionRow = styled.div`
  margin-top: 8px;
  padding-top: 8px;
  width: 100%;
`;

export const MeaningRow = styled.div`
  margin-top: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;
