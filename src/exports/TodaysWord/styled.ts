import styled from "@emotion/styled";

export const WidgetContainer = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  height: 160px;
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
  margin-bottom: 8px;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 4px;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const KanjiWrapper = styled.div`
  & > * {
    font-size: 2.2rem !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;
